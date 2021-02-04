import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import ListOfToDos from './components/ListOfToDos';



ReactDOM.render(
  <React.StrictMode>
    <h1>My ToDo App</h1>
    <InputField />
    <SubmitButton />
    <ListOfToDos />
  </React.StrictMode>,
  document.getElementById('root')
);

