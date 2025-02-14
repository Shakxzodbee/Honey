import React, { useEffect } from 'react'
import './TestimonialCard.css';
import 'aos/dist/aos.css'
import Aos from 'aos'
import { toast } from 'react-toastify';

const TestimonialCard = ({ name, text, imgSrc }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

    const notify = () => toast.warn("This page is currently down. !");

  return (
    <div className='wrap'>
      <div className="testimonial-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className='info-div'>
          <h2>{name}</h2>
          <p>{text}</p>
          <button className="testimonial-button" onClick={notify}>Buy Now</button>
        </div>
        <div className='imgvalue'>
          <img src={imgSrc} alt={`${name} rasm`} className="testimonial-img" />
        </div>
      </div>
      <div className="testimonial-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div className='info-div'>
          <h2>{name}</h2>
          <p>{text}</p>
          <button className="testimonial-button" onClick={notify}>Buy Now</button>
        </div>
        <div className='imgvalue'>
          <img src={imgSrc} alt={`${name} rasm`} className="testimonial-img" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;