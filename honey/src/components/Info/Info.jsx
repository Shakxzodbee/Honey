import SecondImg from '../../assets/SecondImg.png'
import FirstImg from '../../assets/FirstImg.png'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Info.css'

const Info = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <section>
            <div className="info">
                <div data-aos="flip-down">
                    <img src={FirstImg} alt="" />
                </div>
                <div className='first-info-text' data-aos="flip-down">
                    <h2>Honey created in the laps of nature</h2>
                    <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                    <button className='open-btn'>Learn More</button>
                </div>
            </div>
            <div className="info">
                <div className='first-info-text' data-aos="flip-down">
                    <h2>Does your honey taste bad? Try us!</h2>
                    <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                    <button>Learn More</button>
                </div>
                <div data-aos="flip-down">
                    <img src={SecondImg} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Info;