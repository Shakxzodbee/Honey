import HoneyFirstImg from '../../assets/miel_eucalyptus_forets_andalousie 1.png'
import HoneySecondImg from '../../assets/basswood-honey-removebg 1.png'
import TestimonialCard from './TestimonialCard';
import React from 'react';

const TestimonialList = () => {
  const testimonials = [
    {
      name: 'Eucalyptus Honey	',
      text: 'It has the scent of lavender, medium sweetness lavender scented, and has a medium amber color.',
      imgSrc: HoneyFirstImg,
    },
    {
      name: 'Basswood Honey',
      text: 'Basswood is a tree native and abundant in Wisconsin, which is also known as the Linden tree.',
      imgSrc: HoneySecondImg,
    },
    {
      name: 'Eucalyptus Honey	',
      text: 'It has the scent of lavender, medium sweetness lavender scented, and has a medium amber color.',
      imgSrc: HoneyFirstImg,
    },
  ];

  return (
    <div className="testimonial-list">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;