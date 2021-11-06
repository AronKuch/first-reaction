import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
    <App pictures = {false} />,
  </Router>,
  document.getElementById('root')
);
