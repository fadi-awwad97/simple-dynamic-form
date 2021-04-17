import React, { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [inputList, setInputList] = useState([{ fName: "", age: "",email:"" }]);
  const [validForm, setValidForm] = useState(false);
  const [error,setError] = useState("");

  useEffect(() => {
    if(validForm==true){
      setError("Everything valid")
      setTimeout(()=>{
        alert(JSON.stringify(inputList))
      },500)
      }
    else{
      setError("Please follow Validations")
    }
  },[validForm]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };



  const handleAddClick = () => {
    setValidForm(false);
    setInputList([...inputList, { fName: "", age: "",email:"" }]);
  };

  const handleSubmit = () => {
    setValidForm(true);
    inputList.map((child,index)=> {
      if ( child.fName.length == 0 || child.age.length ==0 || child.age >100  || child.email.length == 0){
      setValidForm(false);
      };
    })
  }

  return (
    <div className="App">
      <h3>Dynamic Form</h3>
      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <label>Name</label>
            <input
              className="input"
              name="fName"
              placeholder="Required"
              value={x.fName}
              onChange={e => handleInputChange(e, i)}
            />
            <label>Age</label>
            <input
              className="input"
              name="age"
              placeholder="max 100"
              value={x.age}
              onChange={e => handleInputChange(e, i)}
            />
            <label>Email</label>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Required"
              value={x.email}
              onChange={e => handleInputChange(e, i)}
            />
            <div >
              {inputList.length - 1 === i && <button className="button" onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <button className="button"
       onClick={handleSubmit}>Submit</button>
      <div>{error}</div>
    </div>
  );
}

export default App;