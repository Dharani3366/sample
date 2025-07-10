// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDepdefakSG__iZzV3YnT3lpcDj0eXxmC4",
  authDomain: "login1-ed616.firebaseapp.com",
  projectId: "login1-ed616",
  storageBucket: "login1-ed616.appspot.com",  
  messagingSenderId: "167883698435",
  appId: "1:167883698435:web:ff1bf1688fb3f18ef0b936"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
export default app;