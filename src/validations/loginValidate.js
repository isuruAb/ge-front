import { makeValidator } from "../util/validateUtil";

export default values => {
  let errors = {};

  const { errors: newErrors, validateEmail, validatePassword } = makeValidator(
    values
  );
  validateEmail(values, "email");
  validatePassword(values, "password");
  errors = { ...errors, ...newErrors };

  return errors;
};
