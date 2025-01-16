import Bee from '../../assets/18030479-removebg 1.png';
import HoneyWithBee from '../../assets/Group 55.png';
// import Honey from '../../assets/_x32_.png';
import Line from '../../assets/Line 1.png';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css'
import './Header.css'
import React, { useState, useEffect } from "react";
import Aos from 'aos'
import Modal from "../Modal/Modal"

const Header = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const notify = () => toast.warn("direction not determined !");

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <header>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className='honey-h3'>Honey created in the laps of nature</h3>
                <p className='honey-pp'>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help you connect with health-conscious consumers, build trust, and emphasize the natural, organic qualities of your product. By leveraging storytelling, educating your audience about the health benefits of honey, and showcasing its versatility in cooking, skincare, and wellness routines, you can create a loyal customer base. Collaborating with influencers, using social media platforms, and participating in community events can also enhance brand visibility and foster a strong connection with your target market.</p>
            </Modal>
            <div className='header'>
                <div className='ContainerThenFirstDiv' data-aos="fade-up">
                    <div>
                        <h1 data-aos="fade-right" data-aos-duration="1000">Finger</h1>
                        <h2 data-aos="fade-right" data-aos-duration="2000">Licking</h2>
                        <div className='BeeWithName'>
                            <div className="img">
                                <img className='BeeImg' src={Bee} alt="" />
                                <img className='BeeLine' src={Line} alt="" />
                            </div>
                            <h2 className='second-h2' data-aos="fade-right" data-aos-duration="3000">honey!</h2>
                        </div>
                        <div className='btn-div'>
                            <button onClick={openModal}>Buy Now</button>
                            <button className='second-btn' onClick={openModal}>Learn More</button>
                        </div>
                    </div>
                    <div className='Honeys'>
                        <img src={HoneyWithBee} alt="" />
                    </div>
                </div>
            </div>
            {/* <img className='HoneImgPosition' src={Honey} alt="" /> */}
        </header>
    )
}
export default Header;