import React, { useState } from 'react'
import './navbar.css'

function Navbar() {
    const [navbarColor, setNavbarColor] = useState(false);
    const [navbarMenu, setNavbarMenu] = useState(false);
    const navItemClick = null;

    const changeBackground = () => {
        if(window.scrollY >= 72) {
            setNavbarColor(true);
        }
        else {
            setNavbarColor(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const handleClick = () => {
        setNavbarMenu(!navbarMenu)
    }

    const handleNavItemClick = () => {

    }

    return (
        <nav className={navbarColor ? 'nav-scrolled' : ''}>
            <ul>
                <div className="mobile-nav" onClick={handleClick}><i className="fas fa-bars"></i></div>
                <div className={navbarMenu ? '' : 'nav-close'}>
                    <li onClick={handleNavItemClick} ref={navItemClick}>Home</li>
                    <li ref={navItemClick}>About</li>
                    <li ref={navItemClick}>Projects</li>
                    <li ref={navItemClick}>Contact</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
