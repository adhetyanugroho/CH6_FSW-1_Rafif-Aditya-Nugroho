import React from 'react';
import brand from '../assets/images/logo.png';
import menu from '../assets/images/fi_menu.svg';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={brand} alt="logo.png" />
          </a>

          <ul className="flex-row gap-32 list-unstyled nav-list pt-2">
            <li className="list"><a href="#service">Our Services</a></li>
            <li className="list"><a href="#why-us">Why Us</a></li>
            <li className="list"><a href="#testimonial">Testimonial</a></li>
            <li className="list"><a href="#Asked-Question">FAQ</a></li>
            <li>
              <button className="btn-custom btn-success" type="button" href="#">
                Register
              </button>
            </li>
          </ul>
          <button
            type="button"
            id="sidebar-menu"
            className="btn-burger-menu"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <img
              src={menu}
              alt="icon-menu.svg"
              width="24"
              height="24"
            />
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel"><b>BCR</b></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="side"><a href="#service">Our Services</a></li>
            <li className="side"><a href="#why-us">Why Us</a></li>
            <li className="side"><a href="#testimonial">Testimonial</a></li>
            <li className="side"><a href="#Asked-Question">FAQ</a></li>
            <li>
              <button className="btn-custom btn-success" type="button" href="#">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
