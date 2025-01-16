import Bee from '../../assets/18030479-removebg 1.png';
import HoneyWithBee from '../../assets/Group 55.png';
// import Honey from '../../assets/_x32_.png';
import Line from '../../assets/Line 1.png';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css'
import './Header.css'
import Aos from 'aos'

const Header = () => {

    const notify = () => toast.warn("direction not determined !");

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <header>
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
                            <button>Buy Now</button>
                            <button className='second-btn' onClick={notify}>Learn More</button>
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