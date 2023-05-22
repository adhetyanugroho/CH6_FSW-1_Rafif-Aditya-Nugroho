import React from 'react';
import iconFacebook from '../assets/images/icon_facebook.png';
import iconInstagram from '../assets/images/icon_instagram.png';
import iconTwitter from '../assets/images/icon_twitter.png';
import iconMail from '../assets/images/icon_mail.png';
import iconTwitch from '../assets/images/icon_twitch.png';
import logoBrand from '../assets/images/logo_bawah.png';

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 alamat">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <div className="col-md-2 menu pt-2">
            <ul className="list-unstyled">
              <li className="satu"><a href="#service">Our services</a></li>
              <li className="satu"><a href="#why-us">Why Us</a></li>
              <li className="satu"><a href="#testimonial">Testimonial</a></li>
              <li className="satu"><a href="#Asked-Question">FAQ</a></li>
            </ul>
          </div>

          <div className="col-md-3 connect pt-2">
            <p>Connect with us</p>
            <div className="row row-cols-auto">
              <div className="col">
                <img src={iconFacebook} alt="icon_facebook.png" />
              </div>
              <div className="col">
                <img src={iconInstagram} alt="icon_instagram.png" />
              </div>
              <div className="col">
                <img src={iconTwitter} alt="icon_twitter.png" />
              </div>
              <div className="col">
                <img src={iconMail} alt="icon_mail.png" />
              </div>
              <div className="col">
                <img src={iconTwitch} alt="icon_twitch.png" />
              </div>
            </div>
          </div>

          <div className="col-md-4 copyright pt-2">
            <p>Copyright Binar 2022</p>
            <img src={logoBrand} alt="logo_bawah.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
