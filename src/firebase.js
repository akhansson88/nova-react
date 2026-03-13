import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAwRCkfgHYUHoKUlCSpaE931Vjez7X-R-A',
  authDomain: 'nova-tryck.firebaseapp.com',
  projectId: 'nova-tryck',
  storageBucket: 'nova-tryck.firebasestorage.app',
  messagingSenderId: '705045299024',
  appId: '1:705045299024:web:76bf206afcdd960c40f655',
  measurementId: 'G-9NDKSRC0H1',
};

const app = initializeApp(firebaseConfig);

let analytics = null;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    analytics = null;
  });
}

export { app, analytics };
