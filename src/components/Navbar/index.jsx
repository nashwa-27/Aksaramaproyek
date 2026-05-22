import React from 'react'
import Aksarama from "../../assets/Aksarama.webp";
import "./index.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Profile from "../../assets/profile.png";


const Navbar = () => {
    // get local storage
    const userData = localStorage.getItem("userData")

    console.log("User Data: ", userData)

    return (
        <header className="navbar">
            <img
                src={Aksarama}
                alt="logo"
                className="logo"
            />

            <nav className="nav-links">
                <HashLink to="/#home">
                    Home
                </HashLink>


                <Link to="/Aboutus">
                    About Us
                </Link>

                <HashLink smooth to="/#movie">
                    Movie
                </HashLink>

                <Link to="/Information">
                    Information
                </Link>

                <Link to="/Games">
                    Games
                </Link>

                <HashLink smooth to="/#feedback">
                    Feedback
                </HashLink>
            </nav>
        
            {userData ? (
                <div>
                   <Link
                    to="/login"
                    onClick={() => localStorage.clear()}
                    className="logout-btn"
                >
                    Logout
                </Link>
                </div>
            ) : (
                <Link
                    to="/login"
                    className="login-btn"
                >
                    Login
                </Link>
            )}
        </header>
    )
}

export default Navbar