import React from 'react';
import styled, { css } from 'styled-components/macro';
import { hot } from 'react-hot-loader';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default hot(module)(App);