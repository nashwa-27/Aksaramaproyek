import React from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import profile from "../../assets/profile.png";
import bgLogin from "../../assets/bgLogin.webp";

function Login() {

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

        <h2>Login</h2>

        {/* INPUT */}

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        {/* BUTTON */}

        <button
          className="btn"

          onClick={() => navigate("/")}
        >

          Login

        </button>

        {/* SIGNUP */}

        <p className="signup-text">

          Dont Have an Account?{" "}

          <span
            onClick={() => navigate("/SignUp")}
          >

            Sign Up

          </span>

        </p>

      </div>

    </div>

  );
}

export default Login;