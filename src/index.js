import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './NavBar/Navbar.js';
import HomePage from './HomeSection/Home.js';
import AboutPage from './AboutSection/About.js';
import ProjectsPage from './ProjectSection/Projects.js'

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <HomePage/>
    <AboutPage/>
    <ProjectsPage/>
  </React.StrictMode>,
  document.getElementById('root')
);