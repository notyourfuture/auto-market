import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHsjv62VJ32NElv35_ndgCxytkkZR84Xo",
  authDomain: "auto-market-9f725.firebaseapp.com",
  projectId: "auto-market-9f725",
  storageBucket: "auto-market-9f725.appspot.com",
  messagingSenderId: "917331698988",
  appId: "1:917331698988:web:4661dac73bf0c14c293889",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
