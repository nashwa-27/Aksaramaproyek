import React from "react";
import "./index.css";

import Profile from "../../assets/profile.png";
import AksaramaLogo from "../../assets/AksaramaPutih.png";

import Instagram from "../../assets/instagram.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          <h3>Navigation</h3>

          <Link to="/Aboutus">About Us</Link>

          <HashLink smooth to="/#home">
            Home
          </HashLink>

          <Link to="/Information">
            Information
          </Link>

          <HashLink smooth to="/#movie">
            Movie
          </HashLink>

          <HashLink smooth to="/#feedback">
            Feedback
          </HashLink>

        </div>

        {/* CENTER */}
        <div className="footer-center">

          {/* <img
            src={Profile}
            alt="Maskot"
            className="profile-img"
          /> */}

          <img
            src={AksaramaLogo}
            alt="AksaramaPutih"
            className="aksarama-logo"
          />

          <a
            href="https://www.instagram.com/aksarama.web"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="social-icon"
            />
          </a>

        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <h3>Get In Touch</h3>

          <p>
            +62 895-4230-12443
          </p>

          <p>
            kelompok6@gmail.com
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;