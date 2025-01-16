import FourthBrand from '../../assets/brand3.png';
import SecondBrand from '../../assets/brand1.png';
import FirstBrand from '../../assets/brand4.png';
import ThirdBrand from '../../assets/brand2.png';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import './Sponsors.css'
import Aos from 'aos'

const Sponsor = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div className="Sponsor">
            <h2 data-aos="fade-down" data-aos-duration="2000">Our Trusted Shops</h2>

            <div className='brand-container' data-aos="zoom-in">
                <img src={FirstBrand} alt="" />
                <br />
                <img src={SecondBrand} alt="" />
                <br />
                <img src={ThirdBrand} alt="" />
                <br />
                <img src={FourthBrand} alt="" />
            </div>
        </div>
    )
}
export default Sponsor;