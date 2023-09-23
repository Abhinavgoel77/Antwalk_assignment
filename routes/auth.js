const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email} = req.body;
  
    // Insert user into the database
    db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], (err, results) => {
      if (err) {
        console.error('Registration error:', err);
        res.status(403).json({ error: "User already exists" });
      } else {
        res.status(200).json({ message: 'Registration successful' });
      }
    });
  });
  
  // Login route
  router.post('/login', (req, res) => {
    const { email } = req.body;
  
    // Check if the user exists in the database
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Login failed' });
      } 
      else if (results.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
      } 
      else {

        const user = results[0].username;
          res.status(200).json({ user });
      }
    });
  });

  module.exports = router;