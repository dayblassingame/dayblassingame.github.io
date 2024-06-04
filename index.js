import React from "react";
import ReactDOM from "react-dom";
import {App} from './src/App';
import { initializeApp } from "firebase/app";
const rootElement = document.getElementById('app');

const firebaseConfig = {
    apiKey: "AIzaSyBMwVBKTJOTd0MhtC_oocUowbALEoCecEw",
    authDomain: "portfolio-62020.firebaseapp.com",
    databaseURL: "https://portfolio-62020-default-rtdb.firebaseio.com",
    projectId: "portfolio-62020",
    storageBucket: "portfolio-62020.appspot.com",
    messagingSenderId: "184285872735",
    appId: "1:184285872735:web:9b5e421738c6afdc0351ea",
    measurementId: "G-L1T7LJRSLS"
};

initializeApp(firebaseConfig);
ReactDOM.render(<App/>, rootElement);