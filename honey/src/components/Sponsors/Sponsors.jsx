import './Sponsors.css'
import React from 'react'
import FirstBrand from '../../assets/brand4.png'
import SecondBrand from '../../assets/brand1.png'
import ThirdBrand from '../../assets/brand2.png'
import FourthBrand from '../../assets/brand3.png'
const Sponsor = ()=>{
    return(
        <div className="Sponsor">
            <h2>Our Trusted Shops</h2>

            <div className='brand-container'>
                <img src={FirstBrand} alt="" />
                <img src={SecondBrand} alt="" />
                <img src={ThirdBrand} alt="" />
                <img src={FourthBrand} alt="" />
            </div>
        </div>
    )
}
export default Sponsor;