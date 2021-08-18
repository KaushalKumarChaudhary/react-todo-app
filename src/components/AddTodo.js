import React, { useState } from 'react';

const AddTodo = ({ addTodoHandler }) => {
  const [inputTodo, setInputTodo] = useState("");

  const buttonHandler = () => {
    if (!inputTodo) {
      return;
    }

    addTodoHandler(inputTodo);
    setInputTodo("");
  };

  const inputHandler = (event) => {
    const inputValue = event.target.value;
    setInputTodo(inputValue);
  };

  return (
    <div className="child">
      <input
        type="text" 
        id="todoDescription" 
        placeholder="Todo description"
        value={inputTodo}
        onChange={inputHandler} // ref can also be used here along with defaultValue
      />
      <div>
        <button type="button" id="buttonAddTodo" onClick={buttonHandler}>Add Todo</button>
      </div>
    </div>
  );
}

export default AddTodo;