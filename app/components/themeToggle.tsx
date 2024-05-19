"use client"

import React, { useState } from 'react';
import {
  SunIcon,
  MoonIcon,
} from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClick, setIsClick] = useState(true);

  const toggleTheme = () => {
    if (isClick) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <div className='absolute top-0 right-0 m-5'>
      <button
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <SunIcon className="h-[1.4rem] w-[1.4rem] transition-all" />
        ) : (
          <MoonIcon className="h-[1.4rem] w-[1.4rem] transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
