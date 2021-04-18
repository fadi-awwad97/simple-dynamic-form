import React from "react";

export default function DynamicForm(props) {
  return (
    <div>
      {props.children}
      {props.inputList.length - 1 === props.index && (
        <button className="button" onClick={props.onSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}
