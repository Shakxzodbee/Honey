import './Navbar.css'
import React from 'react'
import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar