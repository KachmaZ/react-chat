import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { createContext } from 'react';



// Initialize Firebase

firebase.initializeApp({
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore,
    }}>
      <App />
    </Context.Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
