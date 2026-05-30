// import React from 'react'
// import Profile from "../../assets/profile.png";
// import Instagram from "../../assets/instagram.png";
// import "./index.css";
// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';



// const Footer = () => {

//     return (
//         <footer className="footer">
//             <div className="footer-left">
//                 <h3>Navigation</h3>
//                 <HashLink to="/#home">
//                     Home
//                 </HashLink>

//                 <Link to="/#aboutus">
//                     About Us
//                 </Link>

//                 <HashLink smooth to="/#information">
//                     Information
//                 </HashLink>
            

//                 <HashLink smooth to="/#games">
//                     Games
//                 </HashLink>

//                 <HashLink to="/#movie">
//                     Movie
//                 </HashLink>

//                 <HashLink smooth to="/#feedback">
//                     Feedback
//                 </HashLink>

//             </div>

//             <div className="footer-center">
//                 <img
//                     src={Profile}
//                     alt="profile"
//                     className="profile-img"
//                 />

//                 <h2>AKSARAMA</h2>

//                 <a
//                     href="https://www.instagram.com/aksarama.web?igsh=MTRldTZrbHN3cHV2ZA=="
//                     target="_blank"
//                     rel="noreferrer"
//                 >
//                     <img
//                         src={Instagram}
//                         alt="instagram"
//                         className="instagram-icon"
//                     />
//                 </a>
//             </div>

//             <div className="footer-right">
//                 <h3>Get in Touch</h3>

//                 <p>+62 895-4230-12443</p>

//                 <p>
//                     kelompok6@gmail.com
//                 </p>
//             </div>

//         </footer>
//     );
// }

// export default Footer

import React from "react";
import "./index.css";

import Profile from "../../assets/profile.png";
import AksaramaLogo from "../../assets/aksarama.webp";

import Instagram from "../../assets/instagram.png";
import Google from "../../assets/google.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

            <h3>Navigation</h3>

            <HashLink smooth to="/#home">
                Home
            </HashLink>

            <HashLink smooth to="/aboutus">
                About Us
            </HashLink>

            <HashLink smooth to="/information">
                Information
            </HashLink>

            <HashLink smooth to="/games">
                Games
            </HashLink>

            <HashLink smooth to="/#movie">
                Movie
            </HashLink>

            <HashLink smooth to="/#feedback">
                Feedback
            </HashLink>

            

        </div>

        {/* CENTER */}
        <div className="footer-center">

          <img
            src={Profile}
            alt="Maskot"
            className="profile-img"
          />

          <img
            src={AksaramaLogo}
            alt="Aksarama"
            className="aksarama-logo"
          />

          <div className="social-icons">

            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Google}
                alt="Google"
                className="social-icon"
              />
            </a>

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


        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <h3>Get in Touch</h3>

          <p>
            +62 895-4230-12443
          </p>

          <p>
            rihanavici09@gmail.com
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;