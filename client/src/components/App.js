import React from 'react';
import InputTodo from './InputTodo';
import ListOfToDos from './ListOfToDos';

function App() {

  return(
    <div className="container-sm mt-4 d-grid gap-3">
      <h1 className="p-3 mb-2 bg-success text-white">My ToDo App</h1>
      <InputTodo />
      <ListOfToDos />
    </div>
  )
}

export default App;