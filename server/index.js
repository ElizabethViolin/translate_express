const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:3000' })); // Adjust if needed
app.use(express.json());

const detectLanguage = require('./api/detectLanguage');
const translateText = require('./api/translateText');

app.use('/api/detectLanguage', detectLanguage);
app.use('/api/translateText', translateText);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.status(200).send('Express server is running!');
});