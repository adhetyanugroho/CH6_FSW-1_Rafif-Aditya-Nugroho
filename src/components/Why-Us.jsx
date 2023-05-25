import React from 'react';
import iconComplete from '../assets/images/icon_complete.png';
import iconPrice from '../assets/images/icon_price.png';
import iconTime from '../assets/images/icon_24hrs.png';
import iconProfessional from '../assets/images/icon_professional.png';

export default function Why() {
  return (
    <section id="why-us">
      <div className="container">
        <h1 className="heading-why">Why Us</h1>
        <p className="content-why">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row">
          <div className="col-md-3 pt-2">
            <div className="card-1">
              <div className="card-body">
                <img
                  src={iconComplete}
                  className="icon-why"
                  alt="icon_complete.png"
                />
                <h5 className="home-title">Mobil Lengkap</h5>
                <p className="home-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 pt-2">
            <div className="card-1">
              <div className="body-card">
                <img
                  src={iconPrice}
                  className="icon-why"
                  alt="icon_price.png"
                />
                <h5 className="home-title">Harga Murah</h5>
                <p className="home-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 pt-2">
            <div className="card-1">
              <div className="card-body">
                <img
                  src={iconTime}
                  className="icon-why"
                  alt="icon_24hrs"
                />
                <h5 className="home-title">Layanan 24 Jam</h5>
                <p className="home-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 pt-2">
            <div className="card-1">
              <div className="card-body">
                <img
                  src={iconProfessional}
                  className="icon-why"
                  alt="icon_professional.png"
                />
                <h5 className="home-title">Sopir Profesional</h5>
                <p className="home-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
