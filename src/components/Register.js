import React from "react";
import useForm from "../util/useForm";
import validate from "../util/validate";
import FormField from "./Form/FormField";
import "../assets/styles/Register.scss";

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
