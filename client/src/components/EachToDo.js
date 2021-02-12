import React, { useState } from 'react';
import axios from 'axios';

function EachTodo({ todo }) {

  const [todoCompleted, setTodoCompleted] = useState(false);
  
  function deleteTodo(event) {
    event.preventDefault();
    
    axios
      .post(`http://localhost:5000/todos/delete/${todo._id}`)
      .then(res => console.log(res.data));
  }

  return(
    <li className={todo.completed ? "list-group-item list-group-item-action fw-lighter" : "list-group-item list-group-item-action" }>
      <div className="row">
        <div className="col-5">
          <input className="form-check-input" type="checkbox" id={todo._id}
          onChange={() => setTodoCompleted(!todoCompleted)}
          checked={todoCompleted}
          ></input>
          <label className="form-check-label ms-2" htmlFor={todo._id}>{todo.title}</label>
        </div>
        <div className="col-3">
          <form onSubmit={deleteTodo}>
            <button type="submit" className="btnTrash"><i className="fas fa-trash"></i></button>
          </form>
        </div>
      </div> 
    </li>
      
  
  )
  
}

export default EachTodo;