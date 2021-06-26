import React, { useState } from 'react'
import './navbar.css'

function Navbar({handleNavItemClick}) {
    const [navbarColor, setNavbarColor] = useState(false);
    const [navbarMenu, setNavbarMenu] = useState(false);

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

    return (
        <nav className={navbarColor ? 'nav-scrolled' : ''}>
            <ul>
                <div className="mobile-nav" onClick={handleClick}><i className="fas fa-bars"></i></div>
                <div className={navbarMenu ? '' : 'nav-close'}>
                    <a href="#home"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="/"><li>Contact</li></a>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
