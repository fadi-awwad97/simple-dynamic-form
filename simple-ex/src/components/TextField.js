import React from "react";

export default function TextField(props) {

  const handleCheckValidation = (e) => {
    if (e.target.value.length > 0) props.handleInputChange(e, props.index);
    props.valid({ ...props.validation, textFieldValid: true });
  };

  return (
    <div>
      <input
        className="input"
        name="fName"
        placeholder="Required"
        value={props.value}
        onChange={handleCheckValidation}
      />
    </div>
  );
}
