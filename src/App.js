import React, { useRef } from 'react';

import NavBar from './NavBar/Navbar.js';
import HomePage from './HomePage/Home.js';
import AboutPage from './AboutPage/About.js';
import ProjectsPage from './ProjectPage/Projects.js'

function App() {
    const navItemClick = useRef(null);

    const handleNavItemClick = () => {
        console.log(navItemClick);
        navItemClick.current.scrollIntoView();
    }

    return (
        <>
            <NavBar handleNavItemClick={handleNavItemClick}/>
            <HomePage clickRef={navItemClick}/>
            <AboutPage clickRef={navItemClick}/>
            <ProjectsPage clickRef={navItemClick}/>
        </>
    )
}

export default App
