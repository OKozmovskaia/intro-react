import React, { useState, useEffect } from 'react';
import APIaxios from './APIaxios';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async() => {
      const todos = await APIaxios.getAllTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, [setTodos]);

  async function deleteCurTodo (e, id) {
    try {
      e.stopPropagation();
      await APIaxios.deleteTodo(id);
      setTodos(todos.filter(({_id: i}) => id !== i));

    } catch (error) {
      console.log(error);
    }
    
  }
  async function updateCurTodo (e, id) {
    try {
      e.stopPropagation();
      const payload = {completed: !todos.find(todo => todo._id === id).completed}
      const updatedTodo  = await APIaxios.updateTodo(id, payload);
      setTodos(todos.map((todo)=> todo._id === id ? updatedTodo: todo));

    } catch (error) {
      console.log(error);
    }
  }

  
  return todos.length ? (
    <div>
      <h3>Todos:</h3>
        <ul className="list-group list-group-flush">
          {todos.map(todo => {
            return(
              <li key={todo._id} className={todo.completed ? "list-group-item list-group-item-action fw-lighter" : "list-group-item list-group-item-action" }>
                <div className="row">
                  <div className="col-5">
                    <input className="form-check-input" type="checkbox"
                    id={todo._id}
                    onChange={e => updateCurTodo(e, todo._id)}
                    checked={todo.completed}
                    ></input>
                    <label className="form-check-label ms-2" htmlFor={todo._id}>{todo.title}</label>
                  </div>
                  <div className="col-3">
                    <form onSubmit={e => deleteCurTodo(e, todo._id)}>
                      <button type="submit" className="btnTrash"><i className="fas fa-trash"></i></button>
                    </form>
                  </div>
                </div> 
              </li>
            );
          })}
        </ul>
    </div>
  ) : (
    <div>There are not Todos yet.</div>
  )
}