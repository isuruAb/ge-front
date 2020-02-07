import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Landing.scss";
import { ROUTES } from "../util/routes";

export default () => {
  return (
    <div className="landing_parent_wrapper">
      <div className="login_card">
        <h1 className="title">Hello there</h1>

        <Link className="play_btn" to={ROUTES.login}>
          Login
        </Link>
        <Link className="play_btn" to={ROUTES.register}>
          Register
        </Link>
      </div>
    </div>
  );
};
