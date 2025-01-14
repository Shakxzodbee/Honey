import './Footer.css'
import Logo from '../../assets/Footerlogo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}
export default Footer;