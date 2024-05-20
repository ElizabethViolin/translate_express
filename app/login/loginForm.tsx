"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '../lib/auth';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push('/'); 
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error('Unexpected error', error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      <h1 className='mb-5 text-2xl'>Welcome to Translate Express!</h1>
      <form className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-80 px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-80 px-4 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        />
        <div className='flex justify-around'>
          <Button variant="ghost" onClick={handleSignIn} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Sign In
          </Button>
          <Button variant="ghost" onClick={handleSignUp} className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
