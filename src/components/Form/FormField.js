import React from "react";
export default props => {
  const { labelText, type, name, handleOnchange, value, error } = props;
  return (
    <label>
      {labelText}:
      <input
        type={type}
        name={name}
        onChange={handleOnchange}
        value={value}
        className={`${error ? "text_field field_error" : "text_field"}`}
      />
      {error && <div className="error_message">{error}</div>}
    </label>
  );
};
