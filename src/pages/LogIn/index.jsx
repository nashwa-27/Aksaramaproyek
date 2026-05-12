import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (

    <div className="container">

      <div className="card">

        <div className="circle"></div>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <div className="remember">

          <input type="checkbox" />

          Remember me

        </div>

        <button
          className="btn"

          onClick={() => navigate("/")}
        >
          Login
        </button>

        <p>

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