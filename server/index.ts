import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import detectLanguageRouter from './api/detectLanguage';
import translateTextRouter from './api/translateText';
import { Translate } from '@google-cloud/translate/build/src/v2';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS || '{}');
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

app.use('/api/detectLanguage', detectLanguageRouter(translate));
app.use('/api/translateText', translateTextRouter(translate));
