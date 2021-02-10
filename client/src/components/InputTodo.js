import React, { useState } from 'react';
import Todo from '../../../models/Todo';

function InputTodo() {
  const [todo, setTodo] = useState('');

  // save newTodo
  function addNewTodo(event) {
    event.preventDefault();
    console.log("todo: ", todo);

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