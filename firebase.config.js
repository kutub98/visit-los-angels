import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyASk6YRrXbTeaZbO5vXZZwwRp5uBEb1sXc',
  authDomain: 'los-angeles-8ddb5.firebaseapp.com',
  projectId: 'los-angeles-8ddb5',
  storageBucket: 'los-angeles-8ddb5.appspot.com',
  messagingSenderId: '476901317089',
  appId: '1:476901317089:web:a8c7a43bed6344c8c95aa0'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage, app };
