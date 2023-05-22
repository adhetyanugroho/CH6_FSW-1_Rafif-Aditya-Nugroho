import React from 'react';
import car from '../assets/images/img_car.png';

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="container-fluid-hero">
        <div className="row">
          <div className="col-md-6 hero-kiri">
            <h1 className="heading-hero">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="subheading-hero">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a href="/cars">
              <button className="btn btn-custom-2 btn-success" type="button">
                Mulai Sewa Mobil
              </button>
            </a>
          </div>
          <div className="col-md-6 hero-kanan">
            <div className="hero-img">
              <img
                src={car}
                className="img-fluid"
                alt="img_car.png"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
