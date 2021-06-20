import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './NavBar/Navbar.js';
import HomePage from './HomePage/Home.js';
import AboutPage from './AboutPage/About.js';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <HomePage/>
    <AboutPage/>
  </React.StrictMode>,
  document.getElementById('root')
);