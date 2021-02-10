import React, { useState } from 'react';

function EachTodo({ todo }) {

  const [todoCompleted, setTodoCompleted] = useState(false);
  
  return(
    <li className={todo.completed ? "list-group-item list-group-item-action fw-lighter" : "list-group-item list-group-item-action" }>
      <input className="form-check-input" type="checkbox" id={todo._id}
        onChange={e => setTodoCompleted(!todoCompleted)}
        value={todoCompleted}
        checked={todoCompleted}
        ></input>
      <label className="form-check-label ms-2" for={todo._id}>{todo.title}</label>
    </li>
      
  
  )
}

export default EachTodo;