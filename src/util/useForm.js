import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleOnchange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = e => {
    setIsSubmitting(true);
    e.preventDefault();
    setErrors(validate(values));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);
  return {
    handleOnchange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    setIsSubmitting
  };
};

export default useForm;
