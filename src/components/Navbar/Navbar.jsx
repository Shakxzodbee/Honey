import Logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import 'aos/dist/aos.css'
import './Navbar.css'

const Navbar = () => {

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
                <div className="fa-bars">
                    <FaBars className='icon' size={30} color='black' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar