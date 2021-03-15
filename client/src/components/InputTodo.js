import React, { useState } from 'react';
import APIaxios from './APIaxios'

function InputTodo() {
  const [todo, setTodo] = useState('');

  const saveTodo = async e => {
    e.preventDefault();

    if(!todo) {
      alert('please enter something');
      return;
    }

    const newTodo = {
      title: todo,
      completed: false
    }

    await APIaxios.addNewTodo(newTodo);
    setTodo('');
    window.location.reload();
  }

  return(
    <div>
      <form onSubmit={saveTodo}>
        <input value={todo} onChange={e => setTodo(e.target.value)} className="form-control" type="text" placeholder="Type a new todo"></input>
        <button type="submit" className="btn btn-success mt-3">Add Todo</button>
      </form>
    </div>
  )
}

export default InputTodo;