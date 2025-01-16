import SecondImg from '../../assets/SecondImg.png'
import FirstImg from '../../assets/FirstImg.png'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Info.css'
import React, { useState } from "react";
import Modal from '../Modal/Modal'

const Info = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <section>
            <div className="info">
                <div data-aos="flip-down">
                    <img src={FirstImg} alt="" />
                </div>
                <div className='first-info-text' data-aos="flip-down">
                    <h2>Honey created in the laps of nature</h2>
                    <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                    <button className='open-btn' onClick={openModal}>Learn More</button>

                </div>
            </div>
            <div className="info">
                <div className='first-info-text' data-aos="flip-down">
                    <h2>Does your honey taste bad? Try us!</h2>
                    <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                    <button onClick={openModal}>Learn More</button>
                </div>
                <div data-aos="flip-down">
                    <img src={SecondImg} alt="" />
                </div>
            </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className='honey-h2'>Honey created in the laps of nature</h2>
                    <p className='honey-p'>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help you connect with health-conscious consumers, build trust, and emphasize the natural, organic qualities of your product. By leveraging storytelling, educating your audience about the health benefits of honey, and showcasing its versatility in cooking, skincare, and wellness routines, you can create a loyal customer base. Collaborating with influencers, using social media platforms, and participating in community events can also enhance brand visibility and foster a strong connection with your target market.</p>
                </Modal>
        </section>
    )
}
export default Info;