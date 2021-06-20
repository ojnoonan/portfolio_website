import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about-page'>
            <div className='card'>
                <div className="profile-sidebar">
                    <img src={'/images/profile_photo.png'} alt="" />
                    <ul>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                    </ul>
                </div>
                <div className="profile-main">
                    <h2 className="profile-name">Oliver Noonan</h2>
                    <p className="profile-position">Software Engineer</p>
                    <p className="profile-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit, illo recusandae? Distinctio voluptas quam itaque 
                        voluptatem, temporibus eaque eius vitae laborum. Reprehenderit 
                        illum repudiandae dolore harum amet vitae tempore ex!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
