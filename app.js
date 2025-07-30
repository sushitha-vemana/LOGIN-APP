const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { init } = require('express/lib/application');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// GET route - serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// POST route - handle login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple login check
  if (username === 'admin' && password === '1234') {
    res.send('<h2>Login successful!</h2>');
  } else {
    res.send('<h2>Invalid credentials. Try again!</h2>');
  }
});

// Start the server
const port = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
