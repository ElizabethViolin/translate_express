import express, { Request, Response } from 'express';
import { Translate } from '@google-cloud/translate/build/src/v2';

const router = express.Router();

const translateTextRouter = (translate: Translate) => {
    router.post('/', async (req: Request, res: Response) => {
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

    return router;
};

export default translateTextRouter;
