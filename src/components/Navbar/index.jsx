// import React from 'react'
// import Aksarama from "../../assets/Aksarama.webp";
// import "./index.css";
// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';
// import Profile from "../../assets/profile.png";
// import { onSignIn, onSignOut } from "../../service/auth";


// const Navbar = () => {
//     // get local storage
//     const userData = localStorage.getItem("userData")

//     console.log("User Data: ", userData)

//     return (
//         <header className="navbar">
//             <img
//                 src={Aksarama}
//                 alt="logo"
//                 className="logo"
//             />

//             <nav className="nav-links">
//                 <HashLink to="/#home">
//                     Home
//                 </HashLink>


//                 <Link to="/Aboutus">
//                     About Us
//                 </Link>

//                 <HashLink smooth to="/#movie">
//                     Movie
//                 </HashLink>

//                 <Link to="/Information">
//                     Information
//                 </Link>

//                 <Link to="/Games">
//                     Games
//                 </Link>

//                 <HashLink smooth to="/#feedback">
//                     Feedback
//                 </HashLink>
//             </nav>
        
//             {userData ? (
//                 <div>
//                    <Link
//                     to="/Login"
//                     onClick={() => onSignOut()}
//                     className="logout-btn"
//                 >
//                     Logout
//                 </Link>
//                 </div>
//             ) : (
//                 <Link
//                     to="/Login"
//                     onClick={() => onSignIn()}
//                     className="login-btn"
//                 >
//                     Login
//                 </Link>
//             )}
//         </header>
//     )
// }

// export default Navbar

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