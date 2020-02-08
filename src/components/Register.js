import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useForm from "../util/useForm";
import validate from "../validations/loginValidate";
import FormField from "./Form/FormField";
import "../assets/styles/Register.scss";
import { userSignUpAction } from "../redux/actions/userActions";
import { ROUTES } from "../util/routes";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userSignUp = async () => {
    const res = await userSignUpAction(dispatch, values);
    if (res) {
      history.push(ROUTES.login);
    }
    setIsSubmitting(false);
  };

  const {
    handleOnchange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    setIsSubmitting
  } = useForm(userSignUp, validate);

  return (
    <div className="register_parent_wrapper">
      <div className="register_card">
        <h1 className="title">Sign in</h1>
        <form onSubmit={handleSubmit} noValidate>
          <FormField
            {...{
              labelText: "Name",
              type: "text",
              name: "name",
              handleOnchange,
              value: values.name,
              error: errors.name
            }}
          />
          <FormField
            {...{
              labelText: "Email",
              type: "text",
              name: "email",
              handleOnchange,
              value: values.email,
              error: errors.email
            }}
          />
          <FormField
            {...{
              labelText: "Password",
              type: "password",
              name: "password",
              handleOnchange,
              value: values.password,
              error: errors.password
            }}
          />
          <FormField
            {...{
              labelText: "Confirm Password",
              type: "password",
              name: "confirmPassword",
              handleOnchange,
              value: values.confirmPassword,
              error: errors.confirmPassword
            }}
          />
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
