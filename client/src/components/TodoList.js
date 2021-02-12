import React, { useState, useEffect } from 'react';
import EachTodo from './EachTodo';
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([""]);
  const [isLoading, setLoading] = useState(true);

  function fetchTodos() {
    axios
      .get('http://localhost:5000/todos/')
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodos();
    setLoading(false);
  }, []);


  return isLoading ? (
    <div>Loading ... </div>
  ) : todos.length ? (
    <div>
      <hr></hr>
      <h3>Todos:</h3>
        <ul className="list-group list-group-flush">
          {todos.map(todo => {
            return < EachTodo key={todo._id} todo={todo} />;
          })}
        </ul>
    </div>
  ) : (
    <div>There are not Todos yet.</div>
  )
}

export default TodoList;