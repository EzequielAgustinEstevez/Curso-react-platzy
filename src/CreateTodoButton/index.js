import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = ()=>{
    alert('Presionaste el boton')
  }
  return <button className="CreateTodoButton" onClick={onClickButton}>+</button>;
}

export { CreateTodoButton };
