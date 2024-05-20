"use client"

import React, { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import languages from '../../data/languages.json'; 
import { useLanguageStore } from '../store/useLanguageStore';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const languageOptions = languages.map(lang => ({
  label: lang.name,
  value: lang.code
}));

export default function Sidebar() {
  const { selectedLanguages, setSelectedLanguages } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        className="sm:hidden fixed top-5 left-5 z-50 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeftIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : <ChevronRightIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
      </button>
      
      <div className={`bg-gray-300 dark:bg-sidebarGrey flex flex-col h-screen text-gray-700 dark:text-gray-300 p-5 fixed z-40 sm:static sm:w-52 md:w-80 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}>
        <label htmlFor="targetLanguages" className="block mb-2 mt-14">Select any languages part of your conversation:</label>
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
    </div>
  );
}
