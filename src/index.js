import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement("h1", null, "Hello Chucktown"),
  document.getElementById('root')
);

ReactDOM.render(
  React.createElement("p", null, "Just a little playing around to see if I understand"),
  document.getElementById('extra')
);
