import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement(
    "h1",
    {style: {color: "#003366"}},
    "Hello Chucktown"
  ),
  document.getElementById('root')
);

ReactDOM.render(
  React.createElement(
    "p",
    null,
    "Here are some parts of town."
  ),
  document.getElementById('extra')
);

ReactDOM.render(
  <ul>
    <li>Downtown</li>
    <li>West Ashley</li>
    <li>James Island</li>
    <li>Park Circle</li>
  </ul>
  ,
  document.getElementById('list')
);
