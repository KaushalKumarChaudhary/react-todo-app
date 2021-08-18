import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';
import './App.css';
import { TODOS } from './constants/todos';

const App = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getTodosFromStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const getTodosFromStorage = () => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    if (localStorageTodos.length > 0) {
      setTodos(localStorageTodos);
    } else {
      setTodos(TODOS);
    }
  };

  const addTodoHandler = (value) => {
    const newTodoId = todos.length > 0 ? todos.slice(-1)[0].id + 1 : 0;
    const updatedTodos = [...todos, {id: newTodoId, description: value, completed: false}];
    setTodos(updatedTodos);
  };

  const deleteTodoHandler = (todo) => {
    const updatedTodos = todos.filter(item => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  const checkboxHandler = (todo) => {
    const updatedTodos = todos.map(item => 
      item.id === todo.id ? {...item, completed: !todo.completed} : item
    );
    setTodos(updatedTodos);
  };

  const getCompletedTodos = () => {
    return todos.filter(item => item.completed).length;
  }
  
  if (todos) {
    return (
      <div className="container">
        <h1 className="child">React TODO App</h1>
        <Todos 
          todos={todos}
          addTodoHandler={addTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
          checkboxHandler={checkboxHandler}
        />
        <div className="child">
          <span>Total of items: {todos.length}</span> | <span>Completed: {getCompletedTodos()}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
