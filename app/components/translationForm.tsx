import React, { useState } from 'react';
import { translateText, detectLanguage } from '../services/translationService'; 

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
            <input type="text" value={text} className="text-black" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleTranslate}>Translate to English</button>
            <div>Detected Language: {detectedLanguage}</div>
            <div>Translation: {translation}</div>
        </div>
    );
}

export default TranslationForm;
