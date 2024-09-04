// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <a className="navbar-brand fs-4" href="#">NiceBase</a>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
              <a href="pong.exe" className="text-white text-decoration-none px-3 py-1 rounded-4 border-1" style={{ backgroundColor: '#454545' }} id="color" download>Download</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
