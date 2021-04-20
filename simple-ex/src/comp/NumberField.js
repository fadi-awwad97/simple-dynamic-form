import React, { useEffect, useContext } from "react";
import { DynamicContext } from "../contexts/DynamicContext";

export default function NumberField(props) {
  const {
    inputFields,
    handleInputChange,
    setInputFields,
    handleCheckValidty,
  } = useContext(DynamicContext);

  const { source, max, required } = props;

  useEffect(() => {
    setInputFields(Object.assign(inputFields, { [source]: "" }));
  }, []);

  useEffect(() => {
    if (
      inputFields[source] > max ||
      (required && inputFields[source].length === 0)
    ) {
      handleCheckValidty(source, false);
    } else {
      handleCheckValidty(source, true);
    }
  }, [inputFields]);

  return (
    <div>
      <input
        source={source}
        max={max}
        required={required}
        className="input"
        placeholder="Enter Age"
        onChange={(e) => handleInputChange(e.target)}
      />
    </div>
  );
}
