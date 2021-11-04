import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from 'firebase-config';

const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext)
}


const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [mounted, setMounted] = useState(true)

    const signUp = async (email, password) => {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        return user
    }

    const login = async (email, password) => {
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        return userLogin
    }

    const logOut = async () => {
        const logout = await auth.signOut()
        return logout
    }


    useEffect(() => {
        if (mounted) {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
                setLoading(false)
            })
            return unsubscribe
        }
        return (() => {
            setMounted(false)
        })
    }, [mounted])

    const value = {
        currentUser,
        signUp,
        login,
        logOut
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;