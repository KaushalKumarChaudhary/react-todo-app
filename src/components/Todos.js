import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = (props) => {
  const { todos, addTodoHandler, deleteTodoHandler, checkboxHandler } = props;

  return (
    <div className="child">
      <table className="table">
        <thead>
          <tr>
            <td></td>
            <td>What to do next</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <Todo
                todo={todo} 
                deleteTodoHandler={deleteTodoHandler}
                checkboxHandler={checkboxHandler}
              />
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <AddTodo addTodoHandler={addTodoHandler} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
