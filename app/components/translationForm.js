"use client"

import React, { useState } from 'react';
import { detectLanguage, translateText } from '../services/translationService';

function TranslationForm() {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');
    const [detectedLanguage, setDetectedLanguage] = useState('');

    const handleDetectLanguage = async () => {
        const result = await detectLanguage(text);
        setDetectedLanguage(result.language);
    };

    const handleTranslate = async () => {
        const result = await translateText(text, 'en');  // Assuming English translation
        setTranslation(result.translatedText);
    };

    return (
        <div>
            <input type="text" value={text} className="text-black" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleDetectLanguage}>Detect Language</button>
            <button onClick={handleTranslate}>Translate to English</button>
            <div>Detected Language: {detectedLanguage}</div>
            <div>Translation: {translation}</div>
        </div>
    );
}

export default TranslationForm;
