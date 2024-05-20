import { create } from 'zustand'

interface SpeechState {
  isListening: boolean;
  transcript: string;
  setListening: (isListening: boolean) => void;
  setTranscript: (transcript: string) => void;
}

export const useSpeechStore = create<SpeechState>((set) => ({
  isListening: false,
  transcript: '',
  setListening: (isListening) => set({ isListening }),
  setTranscript: (transcript) => set({ transcript }),
}));
