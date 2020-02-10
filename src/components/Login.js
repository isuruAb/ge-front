import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../assets/styles/Login.scss";
import { ROUTES } from "../util/routes";
import FormField from "./Form/FormField";
import useForm from "../util/useForm";
import validate from "../validations/loginValidate";
import { userLoginAction } from "../redux/actions/userActions";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const errorMessage = useSelector(state => state.errorMessage);
  const userLogin = () => {
    userLoginAction(dispatch, values);
  };
  const {
    handleOnchange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    setIsSubmitting
  } = useForm(userLogin, validate);

  useEffect(() => {
    const { authenticated } = auth;
    if (authenticated) {
      history.push(ROUTES.dashboard);
    }
    if (isSubmitting) {
      setIsSubmitting(false);
    }
  }, [auth, history, isSubmitting, setIsSubmitting]);

  return (
    <div className="login_parent_wrapper">
      <div className="login_card">
        <h1 className="title">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <FormField
            {...{
              labelText: "Email Address",
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
          {typeof errorMessage !== "object" && errorMessage && (
            <div className="server_error">{errorMessage}</div>
          )}
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
