const express = require('express');
const router = express.Router();
const { Translate } = require('@google-cloud/translate').v2;
const languages = require('../../data/languages.json');

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const languageMap = languages.reduce((map, lang) => {
    map[lang.code] = lang.name;
    return map;
}, {});

router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        const response = await translate.detect(text);
        const detectedLanguageCode = response[0].language;
        const detectedLanguage = languageMap[detectedLanguageCode] || detectedLanguageCode;
        res.json({ language: detectedLanguage });
    } catch (error) {
        console.error(`Error at detectLanguage --> ${error}`);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
