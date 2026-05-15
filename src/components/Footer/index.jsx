import React from 'react'
import Profile from "../../assets/profile.png";
import Instagram from "../../assets/instagram.png";
import "./index.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-left">
                <h3>Navigation</h3>
                <HashLink to="/#home">
                    Home
                </HashLink>

                <Link to="/#aboutus">
                    About Us
                </Link>

                <HashLink to="/#information">

                    Information
                </HashLink>

                <HashLink to="/#games">
                    Games
                </HashLink>

                <HashLink to="/#movie">
                    Movie
                </HashLink>

                <HashLink to="/#feedback">
                    Feedback
                </HashLink>

            </div>

            <div className="footer-center">
                <img
                    src={Profile}
                    alt="profile"
                    className="profile-img"
                />

                <h2>AKSARAMA</h2>

                <a
                    href="https://www.instagram.com/aksarama.web?igsh=MTRldTZrbHN3cHV2ZA=="
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={Instagram}
                        alt="instagram"
                        className="instagram-icon"
                    />
                </a>
            </div>

            <div className="footer-right">
                <h3>Get in Touch</h3>

                <p>+62 895-4230-12443</p>

                <p>
                    kelompok6@gmail.com
                </p>
            </div>

        </footer>
    );
}

export default Footer