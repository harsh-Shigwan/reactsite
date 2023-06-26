import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
//import reportWebVitals from './reportWebVitals';
//import Apps from "./Apps";
//import Pokemon from "./pokemon";
//import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
  ,document.getElementById("root"));


