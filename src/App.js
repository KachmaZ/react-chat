import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import { createContext } from 'react';



// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyC9jA22-IuOpnkfodFGh1a981Wpz8lKsTo",
  authDomain: "react-chat-6044a.firebaseapp.com",
  projectId: "react-chat-6044a",
  storageBucket: "react-chat-6044a.appspot.com",
  messagingSenderId: "390345796654",
  appId: "1:390345796654:web:6a578338844dcf106603bf",
  measurementId: "G-C4LB6MY9YN"
});

const Context = createContext(null)


const auth = firebase.auth()
const firestore = firebase.firestore()

const App = () => {
  return (
      <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
