import React from 'react';
import imgService from '../assets/images/img_service.png';
import ceklis from '../assets/images/ceklis.png';

export default function Service() {
  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 justify-content-center">
            <img
              className="img-service img-fluid"
              src={imgService}
              alt="img_service.png"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="heading-service">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <div className="content-service">
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
            </div>
            <div className="list-service">
              <ul className="list-unstyled">
                <li className="satu">
                  <span className="satu">
                    <img src={ceklis} alt="" />
                  </span
                  >
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li className="satu">
                  <span className="satu">
                    <img src={ceklis} alt="" />
                  </span
                  >
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li className="satu">
                  <span className="satu">
                    <img src={ceklis} alt="" />
                  </span
                  >
                  Sewa Mobil Jangka Bulanan
                </li>
                <li className="satu">
                  <span className="satu">
                    <img src={ceklis} alt="" />
                  </span
                  >
                  Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li className="satu">
                  <span className="satu">
                    <img src={ceklis} alt="" />
                  </span
                  >
                  Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
