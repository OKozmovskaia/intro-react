import React from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

function App() {

  return(
      <div className="container-sm mt-4 d-grid gap-3">
        <h1 className="p-3 mb-2 bg-success text-white">My ToDo App</h1>
        <InputTodo/>
        <TodoList/>
      </div>
  )
}

export default App;