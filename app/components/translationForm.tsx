"use client"

import React, { useState } from 'react';
import { translateText, detectLanguage } from '../services/translationService'; 
import { Separator } from './ui/separator';

function TranslationForm() {
    const [text, setText] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [detectedLanguage, setDetectedLanguage] = useState<string>('');

    const handleTranslate = async () => {
        const translateResult = await translateText(text, 'en');
        setTranslation(translateResult.translatedText);

        const detectedResult = await detectLanguage(text);
        setDetectedLanguage(detectedResult.language);
    };

    return (
        <div>
            <div>{detectedLanguage}:</div>
            <input type="text" className="text-2xl my-4 w-full bg-transparent" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleTranslate}>Translate</button>
            <Separator className="w-full dark:bg-gray-400 my-4 "/>
            <div>English:</div>
            <div className='text-2xl my-3'>{translation}</div>
        </div>
    );
}

export default TranslationForm;
