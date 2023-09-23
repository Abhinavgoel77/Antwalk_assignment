const db = require('../db/db');
const express = require('express');
const router = express.Router();

// creating a todo
router.post('/create', async(req, res) => {
    const { title, description } = req.body;

    db.query('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description], (err, results) => {
      if (err) {
        console.error('Error creating todo:', err);
        res.status(500).json({ error: 'Internal server error'});
      } else {
        res.status(200).json({message : 'todo added successfully'});
      }
    });
  });
  
  // getting all todo 
  router.get('/getall', async(req, res) => {

    const { page } = req.body;
    const pageSize  = 2;
    const offset = (page - 1) * pageSize;

    db.query('SELECT * FROM todos LIMIT ? OFFSET ?',[pageSize,offset], (err, results) => {
        if (err) {
          console.error('Error fetching todos:', err);
          res.status(500).json({ error: 'Internal server error'});
        } else {
          res.status(200).json(results);
        }
      });
  });
  
  // updating a todo
  router.put('/update', async(req, res) => {
    const { id, title, description } = req.body;

    db.query('UPDATE todos SET title = ?, description = ? WHERE id = ?',[title, description, id], (err, results) => {
        if (err) {
            console.error('Error updating todo:', err);
          res.status(500).json({ error: 'Internal server error'});
        }
        else if(results.length === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        else {
          res.status(200).json({message : 'todo updated successfully'});
        }
      });

  });
  
  // deleting a todo
  router.delete('/delete', async(req, res) => {
    const { id } = req.body;

    db.query('DELETE FROM todos WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error deleting todo:', err);
          res.status(500).json({ error: 'Internal server error'});
        }
        else if(results.length === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        else {
            res.json({ message: 'Todo deleted successfully' });
        }
      });
  });


  module.exports = router;
  
