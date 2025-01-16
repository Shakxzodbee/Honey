import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import './Product.css'
import Aos from 'aos'
import { toast } from 'react-toastify';

const Product = () => {

    const notify = () => toast.error("no other information found !");


    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div>
            <div className='product-container' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div className='product-text'>
                    <h3>Our Product</h3>
                </div>
                <div className="Allproduct">
                    <span onClick={notify}>See all</span>
                </div>
            </div>
        </div>
    )
}
export default Product;