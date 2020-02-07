import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Register.scss";
import { ROUTES } from "../util/routes";
import { userSignUpAction } from "../redux/actions/userActions";
import useForm from "../util/useForm";
import validate from "../util/validate";

export default () => {
  const userSignUp = () => {
    console.log(values);
  };
  const {
    handleOnchange,
    handleSubmit,
    values,
    errors,
    isSubmitting
  } = useForm(userSignUp, validate);

  return (
    <div className="register_parent_wrapper">
      <div className="register_card">
        <h1 className="title">Sign in</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleOnchange}
              value={values.name}
              className={`${
                errors.name ? "text_field field_error" : "text_field"
              }`}
            />
            {errors.name && <div className="error_message">{errors.name}</div>}
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={handleOnchange}
              value={values.email}
              className="text_field"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleOnchange}
              value={values.password}
              className="text_field"
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              onChange={handleOnchange}
              value={values.confirmPassword}
              className="text_field"
            />
          </label>
          <button
            className="standard_btn"
            type="submit"
            disabled={isSubmitting}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
