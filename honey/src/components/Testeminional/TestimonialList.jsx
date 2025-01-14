import React from 'react';
import Testimonial from './Testimonial';

const testimonialData = [
  {
    name: 'John Doe',
    title: 'CEO at Example Inc.',
    text: 'This is an amazing product! Highly recommend it.',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Jane Smith',
    title: 'Designer at Creative Studios',
    text: 'A game-changer for our team. We love it!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Alice Johnson',
    title: 'Product Manager at Tech Solutions',
    text: 'The best investment we made this year.',
    image: 'https://via.placeholder.com/100'
  }
];

const TestimonialList = () => {
  return (
    <div className="testimonial-list">
      {testimonialData.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          title={testimonial.title}
          text={testimonial.text}
          image={testimonial.image}
        />
      ))}
      <h1>Cooming Soon</h1>
    </div>
  );
};

export default TestimonialList;