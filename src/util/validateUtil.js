export const makeValidator = values => {
  const errors = {};

  const validateEmail = (values, fieldName) => {
    var emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!values[fieldName]) {
      errors[fieldName] = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors[fieldName] = "Email is not valid";
    }
  };
  const validatePassword = (values, fieldName) => {
    if (values[fieldName].length < 10) {
      errors[fieldName] = "Password should have at least 10 letters";
    }
  };
  const validateRequired = (values, fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = "Name is required";
    }
  };

  return {
    errors,
    validateEmail,
    validatePassword,
    validateRequired
  };
};
