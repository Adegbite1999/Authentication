import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase-config';


const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext)
}


const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [mounted, setMounted] = useState(true)
    // const [errorAuth, setErrorAuth] = useState(null)

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

    // const signInWithGoogle = async (event) => {
    //     event.preventDefault()
    //     try {
    //         const user = await signInWithPopup(auth, googleAuthProvider)
    //         if (user) {
    //             return window.location.href = 'user/profile';
    //         }
    //     } catch (error) {
    //         throw error
    //     }
    // }
//  const signInWithGithub = async (event) =>{
//   event.preventDefault()
//   try {
//     const user = await signInWithPopup(auth,githubAuthProvider)
//     if(user){
//       return window.location.href = 'user/profile';
//     }
//   } catch (error) {
//       throw error
//   }
// }



    const value = {
        currentUser,
        signUp,
        login,
        logOut,
        // signInWithGoogle,
        // signInWithGithub,
        // errorAuth
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;