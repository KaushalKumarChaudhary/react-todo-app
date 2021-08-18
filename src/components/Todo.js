import React from 'react';

const Todo = ({ todo, deleteTodoHandler, checkboxHandler }) => {

  const renderTodo = () => {
    if (todo.completed) {
      return <s>{todo.description}</s>;
    }
    else {
      return todo.description;
    }
  }

  return (
    <React.Fragment >
      <td style={{ width: 15 }}>
        <input type="checkbox" onChange={() => checkboxHandler(todo)} checked={todo.completed} />
      </td>
      <td>
        {
          renderTodo()
        }
      </td>
      <td style={{ width: 100 }}>
        <button onClick={() => deleteTodoHandler(todo)}>Delete</button>
      </td>
    </React.Fragment>
  );
};

export default Todo;