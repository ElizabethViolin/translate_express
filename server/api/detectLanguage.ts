import express, { Request, Response } from 'express';
import { Translate } from '@google-cloud/translate/build/src/v2';

const router = express.Router();

const detectLanguageRouter = (translate: Translate) => {
    router.post('/', async (req: Request, res: Response) => {
        try {
            const { text } = req.body;
            const [response] = await translate.detect(text);
            res.json({ language: response.language });
        } catch (error) {
            console.error(`Error at detectLanguage --> ${error}`);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    return router;
};

export default detectLanguageRouter;
