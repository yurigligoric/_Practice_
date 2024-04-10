function findSimilarLetters(word) {
    let similarLetters = {};
    
    for(let letter of word) {
        if(similarLetters[letter]) {
            similarLetters[letter]++;
        } else {
            similarLetters[letter] = 1;
        }
    }
    
    let result = [];
    for(let letter in similarLetters) {
        if(similarLetters[letter] > 1) {
            result.push(letter);
        }
    }
    
    return result;
}

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Enable All CORS Requests
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Other middleware and routes can be defined here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});// Assuming you have already set up your Express app and connected to MongoDB as shown in the previous example

// Define a GET endpoint at /home
app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

// Other middleware and routes can be defined here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});// Assuming you have already set up your Express app and connected to MongoDB as shown in the previous example

// Define a GET endpoint at /home
app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

// Other middleware and routes can be defined here

// Start the server