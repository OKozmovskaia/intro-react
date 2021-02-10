import React, { useState } from 'react';
import axios from 'axios';

function InputTodo() {
  const [todo, setTodo] = useState('');
  const todoCompleted = false;

  // save newTodo
  function addNewTodo(event) {
    event.preventDefault();

    const newTodo = {
      todo,
      todoCompleted
    };

    axios
      .post('http://localhost:5000/todos/add', newTodo)
      .then(res => console.log(res.data));

    setTodo('');
  }

  return(
    <div>
      <form onSubmit={addNewTodo}>
        <input value={todo} onChange={e => setTodo(e.target.value)} className="form-control" type="text" placeholder="Type a new todo"></input>
        <button type="submit" className="btn btn-success mt-3">Add Todo</button>
      </form>
    </div>
  )
}

export default InputTodo;