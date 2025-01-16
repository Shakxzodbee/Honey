import React, { useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Navbar.css'

const Navbar = () => {

    const notify = () => toast.warn("direction not determined !");


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
                    <li onClick={notify}>Home</li>
                    <li onClick={notify}>About</li>
                    <li onClick={notify}>Our Products</li>
                    <li onClick={notify}>Contact</li>
                </ul>
                <div className="fa-bars">
                    <FaBars className='icon' size={30} color='black' onClick={notify} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar