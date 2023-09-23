# Antwalk_assignment

1. Setup a Mysql database in local and update the Db connection details in db.js file inside db folder.

2. Create db and tables using sql queries :

3. USE todoapp; -- Use the database you created

        CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE KEY
        );
        
        CREATE TABLE todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        descriptiontodos TEXT
        );

4. Install the the dependencies in root directory using npm install.

5. start the server by using command node server.js.

6. Access the app on localhost:3000.

# all routes present in application 

1. To register a user : 
    
    url : http://localhost:3000/api/auth/register
    Request type : Post
    body : {
    "username": "Abhinav",
    "email" : "Abhinav@gmail.com"
}

2. To login a user : 

    url : http://localhost:3000/api/auth/login
    Request type : Post
    body : {
    "email" : "Abhinav@gmail.com"
}

3. To create a todo : 

    url : http://localhost:3000/api/todos/create
    Request type : Post
    body : {
    "title": "2nd todo",
    "description": "hi my second todo"
}

4. To get all todo : Added a paging functionlity as well by passing the data required on particular page number.

    url : http://localhost:3000/api/todos/getall
    Request type : get
    body : {
        "page" : 2
    }

5. To update a todo : 

    url : http://localhost:3000/api/todos/update
    Request type : put
    body : {
    "id" : 2,
    "title": "updated todo",
    "description": "hi my updated todo"
}

6. To delete a todo : 

    url : http://localhost:3000/api/todos/delete
    Request type : delete
    body : {
    "id" : 1
}