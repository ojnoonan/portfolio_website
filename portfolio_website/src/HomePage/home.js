import React from 'react'
import './home.css'

function Home({clickRef}) {
    return (
        <div className='home-page' ref={clickRef}>
            <h1 className='typewriter glitch'>Hi, my name is Oliver.</h1>
            <p className='subtitle'>Welcome to my portfolio</p>
        </div>
    )
}

export default Home
