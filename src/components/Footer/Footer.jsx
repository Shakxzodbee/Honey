import { FaFacebook, FaTwitter, FaGoogle, FaPinterest, FaTelegram } from 'react-icons/fa';
import GoglePlay from '../../assets/Group 33.png'
import AppStore from '../../assets/Group 31.png'
import Logo from '../../assets/Footerlogo.png'
import React, { useState } from "react";
import { toast } from 'react-toastify';
import './Footer.css'
import Modal from "../Modal/Modal"

const Footer = () => {

    const redirectToDeveloper = () => {
        window.location.href = "https://t.me/shakxzodbee"; // Bu yerda o'zingizning Telegram username'ni kiriting
      };
      const redirectToBoss = () => {
        window.location.href = "https://t.me/nimusurable"; // Bu yerda o'zingizning Telegram username'ni kiriting
      };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <FaFacebook className='icon' size={25} color="black" onClick={openModal} />
                    <FaTwitter className='icon' size={25} color='black' onClick={openModal} />
                    <FaGoogle className='icon' size={25} color='black' onClick={openModal} />
                    <FaPinterest className='icon' size={25} color='black' onClick={openModal} />
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h2 className='modal-h2'>This icon has no direction</h2>
                        <p>To connect with us</p>
                        <div className='connect-div'>
                            <div className="boss" onClick={redirectToBoss}>
                                <FaTelegram className='icon' size={25} color='black' onClick={openModal} /><span>Booss</span>
                            </div>
                            <div className="dev" onClick={redirectToDeveloper} >
                                <FaTelegram className='icon' size={25} color='black' onClick={openModal} /><span>Developer</span>
                            </div>
                        </div>
                    </Modal>
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