import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>,
  document.getElementById('root')
);
