import React, { useState } from 'react'
import './navbar.css'

function Navbar({handleNavItemClick}) {
    const [navbarColor, setNavbarColor] = useState(false);
    const [navbarMenu, setNavbarMenu] = useState(false);
    // const navItemClick = useRef(null);

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
                    <li onClick={handleNavItemClick}>Home</li>
                    <li onClick={handleNavItemClick}>About</li>
                    <li onClick={handleNavItemClick}>Projects</li>
                    <li onClick={handleNavItemClick}>Contact</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
