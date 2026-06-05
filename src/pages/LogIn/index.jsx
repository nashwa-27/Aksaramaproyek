import React from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

import profile from "../../assets/profile.png";
import bgLogin from "../../assets/bgLogin.webp";
import { onSignIn } from "../../service/auth";
import Navbar from "../../components/Navbar";


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (

     
    <div
      className="container"

      style={{
        backgroundImage: `url(${bgLogin})`,
      }}
    >
      <Navbar />
      <div className="card">


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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}

        <button
          className="btn"

          onClick={() => onSignIn(email, password, navigate)}
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