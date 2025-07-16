const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Handle login POST
app.post('/login', (req, res) => {
  const { email, password, stayLoggedIn } = req.body;
  console.log(`Email: ${email}, Password: ${password}, Stay logged in: ${stayLoggedIn}`);
  res.json({ message: "Login data received!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


