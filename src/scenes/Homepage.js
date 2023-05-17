import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Service from '../components/Service';
import Why from '../components/Why-Us';
import Testimonial from '../components/Testimonial';
import Sewa from '../components/Sewa';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Service />
            <Why />
            <Testimonial />
            <Sewa />
            <FAQ />
            <Footer />
        </div>
    )
}
