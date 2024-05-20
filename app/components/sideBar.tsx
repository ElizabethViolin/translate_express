"use client"

import React from 'react';
import { MultiSelect } from "react-multi-select-component";
import languages from '../../data/languages.json'; 
import { useLanguageStore } from '../store/useLanguageStore';

const languageOptions = languages.map(lang => ({
  label: lang.name,
  value: lang.code
}));

export default function Sidebar() {
  const { selectedLanguages, setSelectedLanguages } = useLanguageStore();

  return (
    <div className='bg-gray-300 dark:bg-sidebarGrey flex flex-col h-screen w-80 text-gray-700 dark:text-gray-300 p-5'>
      <label htmlFor="targetLanguages" className="block mb-2">Select any languages part of your conversation:</label>
      <MultiSelect
        options={languageOptions}
        value={selectedLanguages}
        onChange={setSelectedLanguages}
        labelledBy="Select languages"
        className="w-full text-black dark:bg-gray-700 mb-5"
      />
      <p>
        Our interview app seamlessly auto-detects your language and translates in real time. Speak effortlessly as it continuously listens and translates into multiple languages without interruptions. Perfect for smooth, multilingual conversations and interviews. Experience effortless communication today!      
      </p>
    </div>
  );
}
