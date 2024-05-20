"use client"

import React from 'react';
import { MultiSelect } from "react-multi-select-component";
import languages from '../../data/languages.json'; 
import { useLanguageStore } from '../store/useLanguageStore';
import { PencilSquareIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/16/solid';

const languageOptions = languages.map(lang => ({
  label: lang.name,
  value: lang.code
}));

export default function Sidebar() {
  const { selectedLanguages, setSelectedLanguages } = useLanguageStore();

  return (
    <div className='bg-gray-300 dark:bg-sidebarGrey flex flex-col h-screen w-80 text-gray-700 dark:text-gray-300 p-5'>
      <label htmlFor="targetLanguages" className="block mb-2">Translate to:</label>
      <MultiSelect
        options={languageOptions}
        value={selectedLanguages}
        onChange={setSelectedLanguages}
        labelledBy="Select languages"
        className="w-full text-black dark:bg-gray-700"
      />
    </div>
  );
}
