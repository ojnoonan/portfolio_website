import React from 'react'
import './about.css'
import Tooltip from '@material-ui/core/Tooltip';

function About() {
    return (
        <div className='about-page' id='about'>
            <div className='card'>
                <div className="profile-sidebar">
                    <img className='profile-image' src={'images/profile_photo.png'} alt="" />
                    <ul className='social-list'>
                        <Tooltip title="GitHub" arrow>
                            <li className='social-item'><a aria-label='github' className='social-link' href="https://github.com/ojnoonan" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a></li>
                        </Tooltip>
                        <Tooltip title="LinkedIn" arrow>
                            <li className='social-item'><a aria-label='linkedin' className='social-link' href="https://www.linkedin.com/in/oliver-noonan-725a37204/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        </Tooltip>
                        <Tooltip title="CV" arrow>
                            <li className='social-item'><a aria-label='CV' className='social-link' href="./Oliver_Noonan_CV_2021.pdf" download><i className="fas fa-file-download"></i></a></li>
                        </Tooltip>
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
