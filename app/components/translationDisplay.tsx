"use client"

import React, { useEffect, useState } from 'react';
import { translateText, detectLanguage } from '../services/translationService';
import { Separator } from './ui/separator';
import { useSpeechStore } from '../store/useSpeechStore';
import { useLanguageStore } from '../store/useLanguageStore';

function TranslationDisplay() {
  const [translations, setTranslations] = useState<{ [index: number]: { [key: string]: string } }>({});
  const [detectedLanguages, setDetectedLanguages] = useState<{ [index: number]: string }>({});
  const { transcripts, inProgressTranscript } = useSpeechStore();
  const { selectedLanguages } = useLanguageStore();

  const handleTranslate = async (transcript: string, index: number) => {
    if (!transcript.trim()) return;

    const detectedResult = await detectLanguage(transcript);
    setDetectedLanguages((prev) => ({ ...prev, [index]: detectedResult.language }));

    const translationsForTranscript = await Promise.all(
      selectedLanguages.map(async (lang) => {
        const translateResult = await translateText(transcript, lang.value);
        return { [lang.value]: translateResult.translatedText };
      })
    );

    setTranslations((prev) => ({ ...prev, [index]: Object.assign({}, ...translationsForTranscript) }));
  };

  useEffect(() => {
    transcripts.forEach((transcript, index) => {
      handleTranslate(transcript, index);
    });
    handleTranslate(inProgressTranscript, transcripts.length);
  }, [transcripts, inProgressTranscript, selectedLanguages]);

  return (
    <div className='mt-20 mx-20 w-full'>
      {transcripts.length > 0 || inProgressTranscript ? (
        <>
          {inProgressTranscript && (
            <div key="inProgress" className='bg-gray-300 dark:bg-messageGrey rounded-lg h-fit p-8 mb-4'>
              <div>{detectedLanguages[transcripts.length]}:</div>
              <div className="text-2xl my-4 w-full bg-transparent">{inProgressTranscript}</div>
              <Separator className="w-full dark:bg-gray-400 my-4"/>
              <div>Translations:</div>
              {translations[transcripts.length] && Object.entries(translations[transcripts.length]).map(([lang, translation]) => (
                <div key={lang} className="text-2xl my-3">
                  <strong>{selectedLanguages.find(l => l.value === lang)?.label}:</strong> {translation}
                </div>
              ))}
            </div>
          )}
          {transcripts.slice().reverse().map((transcript, index) => {
            const reversedIndex = transcripts.length - 1 - index;
            return (
              <div key={reversedIndex} className='bg-gray-300 dark:bg-messageGrey rounded-lg h-fit w-full p-8 mb-4'>
                <div>{detectedLanguages[reversedIndex]}:</div>
                <div className="text-2xl my-4 w-full bg-transparent">{transcript}</div>
                <Separator className="w-full dark:bg-gray-400 my-4"/>
                <div>Translations:</div>
                {translations[reversedIndex] && Object.entries(translations[reversedIndex]).map(([lang, translation]) => (
                  <div key={lang} className="text-2xl my-3">
                    <strong>{selectedLanguages.find(l => l.value === lang)?.label}:</strong> {translation}
                  </div>
                ))}
              </div>
            );
          })}
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
