import React, { useState } from 'react';
import Aksarama from "../../assets/Aksarama.webp";
import "./index.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { onSignIn, onSignOut } from "../../service/auth";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const userData = localStorage.getItem("userData");

    return (
        <header className="navbar">

            <img
                src={Aksarama}
                alt="logo"
                className="logo"
            />

            {/* Hamburger */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <nav
                className={`nav-links ${
                    menuOpen ? "active" : ""
                }`}
            >
                <HashLink
                    to="/#home"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </HashLink>

                <Link
                    to="/Aboutus"
                    onClick={() => setMenuOpen(false)}
                >
                    About Us
                </Link>

                <HashLink
                    smooth
                    to="/#movie"
                    onClick={() => setMenuOpen(false)}
                >
                    Movie
                </HashLink>

                <Link
                    to="/Information"
                    onClick={() => setMenuOpen(false)}
                >
                    Information
                </Link>

                <Link
                    to="/Games"
                    onClick={() => setMenuOpen(false)}
                >
                    Games
                </Link>

                <HashLink
                    smooth
                    to="/#feedback"
                    onClick={() => setMenuOpen(false)}
                >
                    Feedback
                </HashLink>

                {userData ? (
                    <Link
                        to="/Login"
                        onClick={() => {
                            onSignOut();
                            setMenuOpen(false);
                        }}
                        className="logout-btn"
                    >
                        Logout
                    </Link>
                ) : (
                    <Link
                        to="/Login"
                        onClick={() => {
                            onSignIn();
                            setMenuOpen(false);
                        }}
                        className="login-btn"
                    >
                        Login
                    </Link>
                )}
            </nav>

        </header>
    );
};

export default Navbar;