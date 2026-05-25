import React, { useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import profile from "../../assets/profile.png";
import bgLogin from "../../assets/bgLogin.webp";
import { onSignUp } from "../../service/auth";

function SignUp() {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (

    <div
      className="container"
      

      style={{
        backgroundImage: `url(${bgLogin})`,
        
      }}
    >

      <div className="card">

        {/* PROFILE */}
      
        <img
          src={profile}
          alt=""
          className="profile-img"
        />

        <h2>Sign Up</h2>

        {/* NAME */}

        <div className="row">

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

        </div>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}

        <button
          className="btn"

          onClick={() => onSignUp(firstName, lastName, email, password, navigate)}
        >

          Sign Up

        </button>

        {/* LOGIN */}

        <p className="login-text">

          Already Have an Account?{" "}

          <span
            onClick={() => navigate("/LogIn")}
          >

            Log in

          </span>

        </p>

      </div>

    </div>

  );
}

export default SignUp;