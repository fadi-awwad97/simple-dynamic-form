import React, { createContext, useState } from "react";

export const DynamicContext = createContext();

export default function DynamicForm(props) {
  const [inputFields, setInputFields] = useState({});
  const [validFields, setValidFields] = useState({});

  const handleCheckValidty = (source, valid) => {
    setValidFields(Object.assign(validFields, { [source]: valid }));
  };

  const handleInputChange = (data) => {
    let source = data.attributes.source.value;
    setInputFields({ ...inputFields, [source]: data.value });
  };

  const Finalvalidation = () => {
    let arr = [];
    Object.values(validFields).map(function (key, index) {
      arr.push(key);
    });
    if (arr.every(Boolean)) {
      props.onSubmit(inputFields);
    } else {
      alert("Please check if all inputs are valid");
    }
  };

  return (
    <DynamicContext.Provider
      value={{
        inputFields,
        handleInputChange,
        handleCheckValidty,
        setInputFields,
      }}
    >
      {props.children}
      <button onClick={(e) => Finalvalidation()}>Submit</button>
    </DynamicContext.Provider>
  );
}
