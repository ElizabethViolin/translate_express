const express = require('express');
const router = express.Router();
const {Translate} = require('@google-cloud/translate').v2;

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        const response = await translate.detect(text);
        res.json({ language: response[0].language });
    } catch (error) {
        console.error(`Error at detectLanguage --> ${error}`);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;