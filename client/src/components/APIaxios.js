import axios from 'axios';

const apiURL = 'http://localhost:5000/todos/';

async function getAllTodos () {
  const result = await axios.get(apiURL);
  return result.data;
};

async function addNewTodo (todo) {
  const result = await axios.post(apiURL, todo)
  return result.data;
};

async function updateTodo (id, payload) {
  try {
    const {data: newTodo} = await axios.put(`${apiURL}${id}`, payload);
    return newTodo;

  } catch (error) {
    console.log(error);
  }
};

async function deleteTodo (id) {
  const result = await axios.delete(`${apiURL}${id}`)
  return result;
};

export default {  getAllTodos, addNewTodo, updateTodo, deleteTodo };