import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Form from '../components/Form';
import Result from '../components/Result';
import Footer from '../components/Footer';
import '../assets/css/sewa.css';

export default function Search() {
  return (
    <>
      <Navbar />
      <Hero />
      <Form />
      <Result />
      <Footer />
    </>
  );
}
