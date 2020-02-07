import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/NotFound.scss";
import { ROUTES } from "../util/routes";

export default () => {
  return (
    <div className="dashboard_parent_wrapper">
      <div className="dashboard_card">
        <h1 className="title">Page not found</h1>

        <Link className="play_btn" to={ROUTES.logout}>
          logout
        </Link>
      </div>
    </div>
  );
};
