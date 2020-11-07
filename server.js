// Load dependencies
const path = require('path');
const express = require('express');

// Require and configure dotenv which is a zero-dependency module
require('dotenv').config()

// Create express app
const app = express();

// Serve static assets from a public directory 
app.use(express.static(path.join(__dirname, 'public')));

// Return 404 errors when a static file cannot be found.
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});