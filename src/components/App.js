import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import ListOfToDos from './ListOfToDos';

function App() {

  return(
    <div>
      <h1>My ToDo App</h1>
      <InputField />
      <SubmitButton />
      <ListOfToDos />
    </div>
  )
}

export default App;