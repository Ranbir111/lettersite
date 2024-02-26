import React from 'react'
import "../css/navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
            <span className='site-logo'>
                <h1>OJT LETTER - Apply</h1>
            </span>
            <span className='navigator'>
                <ul>
                    <Link className='link' to='/'>
                        <li className='navigation-btn'>Home</li>
                    </Link>
                    <Link className='link' to='/generate'>
                        <li className='navigation-btn'>Generate</li>
                    </Link>
                    <Link className='link' to='/about'>
                        <li className='navigation-btn'>About</li>
                    </Link>
                </ul>
            </span>
        </div>
    )
}

export default Navbar
