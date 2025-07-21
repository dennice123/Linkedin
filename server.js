const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}, Password: ${password}`);
  res.json({ message: "Login data received!" });
});

app.post('/verify', (req, res) => {
  const { code } = req.body;
  console.log(`Verification code received: ${code}`);
  res.json({ message: "Verification code received!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




