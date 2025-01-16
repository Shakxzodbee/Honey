import './Sponsors.css'
import React, { useEffect } from 'react'
import FirstBrand from '../../assets/brand4.png'
import SecondBrand from '../../assets/brand1.png'
import ThirdBrand from '../../assets/brand2.png'
import FourthBrand from '../../assets/brand3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Sponsor = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="Sponsor">
            <h2 data-aos="fade-down" data-aos-duration="2000">Our Trusted Shops</h2>

            <div className='brand-container' data-aos="zoom-in">
                <img  src={FirstBrand} alt="" />
                <br />
                <img  src={SecondBrand} alt="" />
                <br />
                <img  src={ThirdBrand} alt="" />
                <br />
                <img  src={FourthBrand} alt="" />
            </div>
        </div>
    )
}
export default Sponsor;