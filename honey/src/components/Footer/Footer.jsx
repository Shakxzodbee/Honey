import './Footer.css'
import GoglePlay from '../../assets/Group 33.png'
import AppStore from '../../assets/Group 31.png'
import Logo from '../../assets/Footerlogo.png'
import { FaFacebook , FaTwitter , FaGoogle , FaPinterest} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
                <div className="text-div">
                    <p>Honey is one of the prime ingredients <br /> in your everyday food schedule</p>
                </div>
                <div className="social-icons">
                    <FaFacebook className='icon' size={25} color="black" />
                    <FaTwitter className='icon' size={25} color='black' />
                    <FaGoogle className='icon' size={25} color='black' />
                    <FaPinterest className='icon' size={25} color='black' />
                    
                </div>
                <div className="download">
                    <img src={GoglePlay} alt="" />
                    <img src={AppStore} alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer;