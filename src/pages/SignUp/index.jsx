import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/LogIn');
  }

  return (
    <div className="container">
      <div className="card">
        <div className="circle"></div>

        <h2>Sign Up</h2>

        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="btn" onClick={() => navigate("/LogIn")}>
          Sign Up
        </button>

        <p>
          Already Have an Account?{" "}
          <span onClick={() => navigate("/LogIn")}>Log in</span>
          </p>
      </div>
    </div>
    
  );
}

export default SignUp;