import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {  createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut,  updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const gitHubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }

  const logInWithEmailPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name , photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL
    })
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe()
  },[])

  

  const authInfo = { user,loading,  setUser, googleLogIn, gitHubLogIn, logInWithEmailPassword, createUser, updateUserProfile, logOut};
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



























