import React, { useState } from 'react';

function EachToDo() {
  const initialTodos = [
    {
      id: 0,
      title: "My first todo",
      complete: false
    }, {
      id: 1,
      title: "My second todo",
      complete: false
    }, {
      id: 2,
      title:"My third todo",
      complete: false
    }];

  const [todos, setTodo] = useState(initialTodos);


  // toggle checkboxes
  function toggleCheckedTodo (index) {
    console.log("index: ", index)
    setTodo(currentToDoList => {
      currentToDoList.map(el => {
        console.log("before", el);
        if(el.id === index) {
          el.complete = !el.complete;
        }
        console.log("after", el);
        return el;
      })
      return todos;
    }
  )};
  
  return(
    <ul className="list-group list-group-flush">
      {todos.map(el => (
        <li className={el.complete ? "list-group-item list-group-item-action fw-lighter" : "list-group-item list-group-item-action" } key={el.id}>
          <input className="form-check-input" type="checkbox" id={el.id} onChange={() => toggleCheckedTodo(el.id)}></input>
          <label className="form-check-label ms-2" for={el.id}>{el.title}</label>
        </li>
      ))
      }
    </ul>
  )
}

export default EachToDo;