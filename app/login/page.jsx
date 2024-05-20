"use client"

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from '../lib/auth';
import LoginForm from './loginForm';

const Login = () => {
  const [user, setUser] = useState(null);

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
