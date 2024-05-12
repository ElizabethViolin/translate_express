const express = require('express');
const router = express.Router();
const { Translate } = require('@google-cloud/translate').v2;

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

router.post('/', async (req, res) => {
    try {
        const { text, targetLanguage } = req.body;
        if (!text || !targetLanguage) {
            return res.status(400).json({ error: 'Missing text or target language' });
        }
        const [translatedText] = await translate.translate(text, targetLanguage);
        res.json({ translatedText });
    } catch (error) {
        console.error(`Error at translateText --> ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
