import React from "react";

export default function NumberField(props) {
  const handleCheckValidation = (e) => {
    if (e.target.value.length > 0) props.handleInputChange(e, props.index);
    props.valid({ ...props.validation, numberFieldValid: true });
  };

  return (
    <div>
      <input
        className="input"
        name="age"
        placeholder="max 100"
        value={props.value}
        onChange={handleCheckValidation}
      />
    </div>
  );
}
