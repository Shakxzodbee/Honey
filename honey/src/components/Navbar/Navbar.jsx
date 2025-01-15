import React, { useEffect } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Navbar = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className='navbar' data-aos="fade-down">
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