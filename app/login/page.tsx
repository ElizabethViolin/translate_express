"use client"

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from '../lib/auth';
import LoginForm from './loginForm';
import { User } from 'firebase/auth';

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Login;
