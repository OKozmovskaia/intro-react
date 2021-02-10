import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import InputTodo from './InputTodo';
import ListOfTodos from './ListOfTodos';

function App() {

  return(
    <Router>
      <div className="container-sm mt-4 d-grid gap-3">
        <h1 className="p-3 mb-2 bg-success text-white">My ToDo App</h1>
        <Route path="/add" component={InputTodo} />
        <Route path="/" exact component={ListOfTodos} />
      </div>
    </Router>
  )
}

export default App;