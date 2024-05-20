import create from 'zustand';

interface Language {
  label: string;
  value: string;
}

interface LanguageStore {
  selectedLanguages: Language[];
  setSelectedLanguages: (languages: Language[]) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  selectedLanguages: [],
  setSelectedLanguages: (languages) => set({ selectedLanguages: languages }),
}));
