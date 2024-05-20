"use client"

import { useEffect } from 'react';
import { useSpeechStore } from '../store/useSpeechStore';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

const subscriptionKey = process.env.NEXT_PUBLIC_AZURE_SUBSCRIPTION_KEY;
const serviceRegion = process.env.NEXT_PUBLIC_AZURE_SERVICE_REGION;

export const useSpeechRecognition = () => {
  const { isListening, setTranscript } = useSpeechStore();

  useEffect(() => {
    if (!isListening || !subscriptionKey || !serviceRegion) return;

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizing = (s, e) => {
      console.log(`Recognizing: ${e.result.text}`);
      setTranscript(e.result.text);
    };

    recognizer.recognized = (s, e) => {
      if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
        console.log(`Recognized: ${e.result.text}`);
        setTranscript(e.result.text);
      } else if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
        console.log("No speech could be recognized.");
      }
    };

    recognizer.startContinuousRecognitionAsync();

    return () => {
      recognizer.stopContinuousRecognitionAsync(
        () => recognizer.close(),
        (err) => recognizer.close()
      );
    };
  }, [isListening, setTranscript]);
};
