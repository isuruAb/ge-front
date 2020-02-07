import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Register.scss";
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
    <div className="register_parent_wrapper">
      <div className="register_card">
        <h1 className="title">Sign in</h1>
        <form onSubmit={handleSignIn}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleEmail}
              value={email}
              className="text_field"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={handleEmail}
              value={email}
              className="text_field"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handlePassword}
              value={password}
              className="text_field"
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
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
