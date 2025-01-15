import './Product.css'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Product = () => {
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
                    <span>See all</span>
                </div>
            </div>
        </div>
    )
}
export default Product;