import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your Firebase configuration
// You can get this from your Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: 'AIzaSyBazZegg0x2WzDY5PyEmIyKOvJSVw98fjM',
  authDomain: 'couple-in-control.firebaseapp.com',
  projectId: 'couple-in-control',
  storageBucket: 'couple-in-control.firebasestorage.app',
  messagingSenderId: '1042302067275',
  appId: '1:1042302067275:web:9b362fe4d3fc5598e9a3ce',
  measurementId: 'G-2T8MNKCNGE',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

export default app
