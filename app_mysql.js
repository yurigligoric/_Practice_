const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define GET endpoint
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error querying MySQL:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// Define POST endpoint
app.post('/users', (req, res) => {
  // Assuming you have a request body with user data
  const newUser = req.body;

  connection.query('INSERT INTO users SET ?', newUser, (error, result) => {
    if (error) {
      console.error('Error inserting into MySQL:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send('User added to database');
  });
});

// Other middleware and routes can be defined here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});