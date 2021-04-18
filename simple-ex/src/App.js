import React, { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";
import TextField from "./components/TextField";
import NumberField from "./components/NumberField";
import EmailField from "./components/EmailField";

function App() {
  const [inputList, setInputList] = useState([
    { fName: "", age: "", email: "" },
  ]);

  const [error, setError] = useState("");
  const [validation, setValidation] = useState([
    { textFieldValid: false, numberFieldValid: false, emailFieldValid: false },
  ]);

  const handleInputChange = (e, index) => {
    console.log("handle", e.target.name);
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    if (
      validation.textFieldValid &&
      validation.numberFieldValid &&
      validation.emailFieldValid
    ) {
      setInputList([...inputList, { fName: "", age: "", email: "" }]);
      setValidation({
        textFieldValid: false,
        numberFieldValid: false,
        emailFieldValid: false,
      });
    } else {
      setError("Please fill All fields right!!");
    }
  };

  const handleSubmit = () => {
    console.log("validation", validation);

    if (
      validation.textFieldValid &&
      validation.numberFieldValid &&
      validation.emailFieldValid
    ) {
      alert(JSON.stringify(inputList));
    } else {
      setError("Please fill All fields right!!");
    }
  };

  return (
    <div className="App">
      <h3>Dynamic Form</h3>
      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <DynamicForm
              onSubmit={handleSubmit}
              inputList={inputList}
              index={i}
            >
              <TextField
                validation={validation}
                valid={setValidation}
                index={i}
                value={x.fname}
                handleInputChange={handleInputChange}
              />
              <NumberField
                validation={validation}
                valid={setValidation}
                index={i}
                value={x.age}
                handleInputChange={handleInputChange}
              />
              <EmailField
                validation={validation}
                valid={setValidation}
                index={i}
                value={x.email}
                handleInputChange={handleInputChange}
              />
              <div>
                {inputList.length - 1 === i && (
                  <button className="button" onClick={handleAddClick}>
                    Add
                  </button>
                )}
              </div>
            </DynamicForm>
          </div>
        );
      })}

      <div>{error}</div>
    </div>
  );
}

export default App;
