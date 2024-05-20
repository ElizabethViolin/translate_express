"use client"

import React, { useEffect, useState } from 'react';
import { translateText, detectLanguage } from '../services/translationService'; 
import { Separator } from './ui/separator';
import { useSpeechStore } from '../store/useSpeechStore';
import { useLanguageStore } from '../store/useLanguageStore';

function TranslationDisplay() {
    const [translations, setTranslations] = useState<{ [key: string]: string }>({});
    const [detectedLanguage, setDetectedLanguage] = useState<string>('');
    const { transcript } = useSpeechStore();
    const { selectedLanguages } = useLanguageStore();

    const handleTranslate = async () => {
        if (transcript) {
            const detectedResult = await detectLanguage(transcript);
            setDetectedLanguage(detectedResult.language);

            const translations = await Promise.all(
                selectedLanguages.map(async (lang) => {
                    const translateResult = await translateText(transcript, lang.value);
                    return { [lang.value]: translateResult.translatedText };
                })
            );

            setTranslations(Object.assign({}, ...translations));
        }
    };

    useEffect(() => {
        handleTranslate();
    }, [transcript, selectedLanguages]);

    return (
        <div className='mt-20 mx-20 bg-gray-300 dark:bg-messageGrey rounded-lg h-fit w-full p-8'>
            {transcript ? (
                <>
                    <div>{detectedLanguage}:</div>
                    <div className="text-2xl my-4 w-full bg-transparent">{transcript}</div>
                    <Separator className="w-full dark:bg-gray-400 my-4"/>
                    <div>Translations:</div>
                    {Object.entries(translations).map(([lang, translation]) => (
                        <div key={lang} className="text-2xl my-3">
                            <strong>{selectedLanguages.find(l => l.value === lang)?.label}:</strong> {translation}
                        </div>
                    ))}
                </>
            ) : (
                <div className="flex justify-center text-2xl my-4 w-full bg-transparent">
                    Click the play button below to start
                </div>
            )}
        </div>
    );
}

export default TranslationDisplay;
