import { makeValidator } from "../util/validateUtil";

export default values => {
  let errors = {};

  const {
    errors: newErrors,
    validateEmail,
    validatePassword,
    validateRequired
  } = makeValidator(values);
  validateEmail(values, "email");
  validatePassword(values, "password");
  validateRequired(values, "name");
  errors = { ...errors, ...newErrors };

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please enter your password again";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password doesn't match";
  }
  return errors;
};
