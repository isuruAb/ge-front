import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Login.scss";
import { ROUTES } from "../util/routes";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleSignIn = e => {
    e.preventDefault();
  };
  return (
    <div className="login_parent_wrapper">
      <div className="login_card">
        <h1 className="title">Sign in</h1>
        <form onSubmit={handleSignIn}>
          <label>
            Email Address:
            <input
              type="text"
              onChange={handleEmail}
              value={email}
              className="text_field"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={handlePassword}
              value={password}
              className="text_field"
            />
          </label>

          <button className="standard_btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
