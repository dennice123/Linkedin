const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (frontend) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle login form POST
app.post('/login', (req, res) => {
  const { email, password, stayLoggedIn } = req.body;
  console.log("Login received:", email, password, stayLoggedIn);
  res.json({ message: "Login received!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


