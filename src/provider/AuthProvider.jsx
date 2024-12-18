import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const addUser = (displayName, email, photoURL, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: displayName,
          photoURL: photoURL,
        }).then(() => {
          return userCredential;
        });
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
        throw error;
      });
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider)
  }

 

  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    addUser,
    userLogin,
    logOut,
    loading,
    setLoading,
    googleLogin
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
