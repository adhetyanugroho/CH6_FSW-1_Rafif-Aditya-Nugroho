import React from 'react'
import testisatu from '../assets/images/testi-satu.png'
import testidua from '../assets/images/testi-dua.png'
import testitiga from '../assets/images/testi-tiga.png'
import testiempat from '../assets/images/testi-empat.png'

export default function Testimonial() {
    return (
        <>
            <section id="testimonial">
                <div className="container">
                    <div className="heading-testimonial">
                        <h1 className="heading-testi">Testimonial</h1>
                        <p className="sub-testimonial">
                            Berbagai review positif dari para pelanggan kami
                        </p>
                    </div>
                    <div className="carousel-section">
                        <div className="owl-carousel owl-theme">
                            <div className="item img-fluid">
                                <img src={testisatu} alt="testi-satu.png" />
                            </div>
                            <div className="item">
                                <img src={testidua} alt="testi-dua.png" />
                            </div>
                            <div className="item">
                                <img src={testitiga} alt="testi-tiga.png" />
                            </div>
                            <div className="item">
                                <img src={testiempat} alt="testi-empat.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
