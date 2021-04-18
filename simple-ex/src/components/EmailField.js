import React from "react";

export default function EmailField(props) {
  const handleCheckValidation = (e) => {
    if (e.target.value.length > 0) props.handleInputChange(e, props.index);
    props.valid({ ...props.validation, emailFieldValid: true });
  };

  return (
    <div>
      <input
        className="input"
        name="email"
        type="email"
        placeholder="Required"
        value={props.value}
        onChange={handleCheckValidation}
      />
    </div>
  );
}
