import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const githubAuthProvider = new GithubAuthProvider()
 const googleAuthProvider = new GoogleAuthProvider()


export {auth, googleAuthProvider,githubAuthProvider }

// const googleAuthProvider = new GoogleAuthProvider()

// export const signInWithGoogle = async (event) =>{
//   event.preventDefault()
//   try {
//     const user = await signInWithPopup(auth,googleProvider)
//     if(user){
//       return window.location.href = 'user/profile';
//     }
//   } catch (error) {
//     throw error
//   }


// }


// export const signInWithGithub = async (event) =>{
//   event.preventDefault()
//   try {
//     const user = await signInWithPopup(auth,githubProvider)
//     if(user){
//       return window.location.href = 'user/profile';
//     }
//   } catch (error) {
//     throw error
//   }


// }

export default app;