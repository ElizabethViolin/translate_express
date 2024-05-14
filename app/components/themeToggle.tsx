"use client"

import React, { useState } from 'react';
import {
  SunIcon,
  MoonIcon,
} from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { Button } from '@/app/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isClick, setIsClick] = useState(true);

  const onStart: DraggableEventHandler = (e, data) => {
    setStartPosition({ x: data.x, y: data.y });
    setIsClick(true); 
  };

  const onStop: DraggableEventHandler = (e, data) => {
    const distanceMoved = Math.sqrt(Math.pow(data.x - startPosition.x, 2) + Math.pow(data.y - startPosition.y, 2));
    setIsClick(distanceMoved < 10);
  };

  const toggleTheme = () => {
    if (isClick) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <div className='z-50 absolute top-0 right-0 mr-5 mt-24 md:mt-8'>
      <Draggable onStart={onStart} onStop={onStop}>
        <div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
              <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all text-xblock-text-light" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </Draggable>
    </div>
  );
}
