import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../assets/styles/Dashboard.scss";
import { getUser, logoutUser } from "../redux/actions/userActions";
import { ROUTES } from "../util/routes";

export default () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    logoutUser(dispatch);
    history.push(ROUTES.index);
  };
  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);
  return (
    <div className="dashboard_parent_wrapper">
      <div className="dashboard_card">
        <h1>Hello {auth && auth.name}</h1>
        <button className="standard_btn" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};
