import { FaFacebook, FaTwitter, FaGoogle, FaPinterest } from 'react-icons/fa';
import GoglePlay from '../../assets/Group 33.png'
import AppStore from '../../assets/Group 31.png'
import Logo from '../../assets/Footerlogo.png'
import { toast } from 'react-toastify';
import './Footer.css'

const Footer = () => {

    const notify = () => toast.error("direction not determined !");

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
                    <FaFacebook className='icon' size={25} color="black" onClick={notify} />
                    <FaTwitter className='icon' size={25} color='black' onClick={notify} />
                    <FaGoogle className='icon' size={25} color='black' onClick={notify}/>
                    <FaPinterest className='icon' size={25} color='black' onClick={notify}/>

                </div>
                <div className="download">
                    <img onClick={notify} src={GoglePlay} alt="" />
                    <img onClick={notify} src={AppStore} alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer;