import React, { useState } from 'react'
import './navbar.css'

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 72) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? 'nav-scrolled' : ''}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
