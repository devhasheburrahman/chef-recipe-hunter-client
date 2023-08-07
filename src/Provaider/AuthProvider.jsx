import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import app from '../../public/firebase/firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const goggleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, goggleProvider);
    };
    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        // console.log(user);
        setUser(user)
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            console.log('current User', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {

        logOut,
        user,
        setUser,
        loading,
        createUser,
        signIn,
        handleGoogleSignIn,
        handleGitHubSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;