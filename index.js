import React from "react";
import ReactDOM from "react-dom";
import {App} from './src/App';
import { initializeApp } from "firebase/app";
const rootElement = document.getElementById('app');
import { firebaseConfig } from "./firebaseConfig";

initializeApp(firebaseConfig);
ReactDOM.render(<App/>, rootElement);