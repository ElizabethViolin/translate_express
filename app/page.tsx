"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from './lib/auth';
import Sidebar from './components/sideBar';
import TranslationDisplay from './components/translationDisplay';
import PlayPauseButton from './components/playPauseButton';
import { Button } from './components/ui/button';
import { ThemeToggle } from './components/themeToggle';
import { User } from 'firebase/auth';

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/login'); 
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  };

  return (
    <div className='flex'>
        <div className='flex-1'>
            <Sidebar />
        </div>
        <div className='fixed top-0 right-0 p-5'>
            {user ? (
            <div className='flex items-center space-x-4'>
                <span>Welcome, {user.email}</span>
                <Button variant="default" onClick={handleSignOut} className='btn btn-primary'>
                Sign Out
                </Button>
            </div>
            ) : (
            <div>
                <Button variant="default" onClick={() => router.push('/login')}>
                Sign In
                </Button>
            </div>
            )}
        </div>
        <TranslationDisplay />
        <PlayPauseButton />
        <ThemeToggle />
    </div>
  );
}

export default Home;
