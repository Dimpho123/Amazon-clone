import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    // SAVE USERNAME
    localStorage.setItem("user", name);

    // GO HOME
    history.push("/");
  };

  return (
    <div className="login">

      {/* LOGO */}
      <Link to="/">
        <img
          className="login_logo"
          src="/assets/logoblack.png"
          alt="Amazon"
        />
      </Link>

      {/* LOGIN BOX */}
      <div className="login_container">

        <h1>Sign in</h1>

        <form onSubmit={signIn}>

          <h5>Your Name</h5>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <h5>Password</h5>

          <input type="password" required />

          <button
            type="submit"
            className="login_signInButton"
          >
            Sign In
          </button>

        </form>

        <p>
          By continuing, you agree to Amazon's Conditions
          of Use and Privacy Notice.
        </p>

        <button className="login_registerButton">
          Create your Amazon Account
        </button>

      </div>
    </div>
  );
};

export default Login;