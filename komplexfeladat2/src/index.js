/*import React from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
//const root = createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
