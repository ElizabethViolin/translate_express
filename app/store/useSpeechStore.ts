import { create } from 'zustand';

interface SpeechState {
  isListening: boolean;
  inProgressTranscript: string;
  transcripts: string[];
  setListening: (isListening: boolean) => void;
  setInProgressTranscript: (transcript: string) => void;
  finalizeTranscript: () => void;
}

export const useSpeechStore = create<SpeechState>((set) => ({
  isListening: false,
  inProgressTranscript: '',
  transcripts: [],
  setListening: (isListening) => set({ isListening }),
  setInProgressTranscript: (transcript) => set({ inProgressTranscript: transcript }),
  finalizeTranscript: () => set((state) => ({
    transcripts: state.inProgressTranscript ? [...state.transcripts, state.inProgressTranscript] : state.transcripts,
    inProgressTranscript: '',
  })),
}));
