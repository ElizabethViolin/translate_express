"use client"

import {
  PlayCircleIcon,
  PauseCircleIcon,
} from '@heroicons/react/16/solid';
import { useSpeechStore } from '../store/useSpeechStore';
import { useSpeechRecognition } from '../services/useSpeechRecognition';

export default function PlayPauseButton() {
  const { isListening, setListening } = useSpeechStore();
  useSpeechRecognition();

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 pl-36">
      {isListening ? (
        <PauseCircleIcon 
          className='h-[3rem] w-[3rem]' 
          onClick={() => setListening(false)}
        />
      ) : (
        <PlayCircleIcon 
          className='h-[3rem] w-[3rem]' 
          onClick={() => setListening(true)}
        />
      )}
    </div>
  );
}
