import React from 'react';
import Carousel from './Carousel';


export default function Testimonial() {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="heading-testimonial">
          <h1 className="heading-testi">Testimonial</h1>
          <p className="sub-testimonial">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <div className="carousel-section" />
        <Carousel />
      </div>

    </section>
  );
}
