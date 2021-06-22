import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about-page'>
            <div className='card'>
                <div className="profile-sidebar">
                    <img className='profile-image' src={'/images/profile_photo.png'} alt="" />
                    <ul className='social-list'>
                        <li className='social-item'><a aria-label='github' className='social-link' href="https://github.com/ojnoonan" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a></li>
                        <li className='social-item'><a aria-label='linkedin' className='social-link' href="https://www.linkedin.com/in/oliver-noonan-725a37204/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        <li className='social-item'><a aria-label='facebook' className='social-link' href="url(/images/Oliver_Noonan_CV_2021.pdf)" download><i className="fas fa-file-download"></i></a></li>
                    </ul>
                </div>
                <div className="profile-main">
                    <h2 className="profile-name">Oliver Noonan</h2>
                    <p className="profile-position">Software Engineer</p>
                    <p className="profile-body">
                        I studied Information Technology at RMIT University. Focusing on
                        Front-End and Back-End development. I enjoy learning new things,
                        my current area of focus is ReactJS.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
