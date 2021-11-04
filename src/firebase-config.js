import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async (event) =>{
  event.preventDefault()
  try {
    const user = await signInWithPopup(auth,googleProvider)
    if(user){
      return window.location.href = 'user/profile';
    }
  } catch (error) {
    throw error
  }


}

const githubProvider = new GithubAuthProvider()

export const signInWithGithub = async (event) =>{
  event.preventDefault()
  try {
    const user = await signInWithPopup(auth,githubProvider)
    if(user){
      return window.location.href = 'user/profile';
    }
  } catch (error) {
    throw error
  }


}

export default app;