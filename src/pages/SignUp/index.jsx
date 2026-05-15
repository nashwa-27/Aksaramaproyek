import React, { useState } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import profile from "../../assets/profile.png";
import bgLogin from "../../assets/bgLogin.webp";
import { onSignUp } from "../../service/auth";

function SignUp() {

  const navigate = useNavigate();

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
          />

          <input
            type="text"
            placeholder="Last Name"
          />

        </div>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
        />

        {/* BUTTON */}

        <button
          className="btn"

          onClick={() => onSignUp()}
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