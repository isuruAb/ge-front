import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Dashboard.scss";
import { ROUTES } from "../util/routes";

export default () => {
  return (
    <div className="dashboard_parent_wrapper">
      <div className="dashboard_card">
        <h1 className="title">Hello there you are in</h1>

        <Link className="standard_btn" to={ROUTES.logout}>
          logout
        </Link>
      </div>
    </div>
  );
};
