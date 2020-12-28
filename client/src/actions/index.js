import axios from 'axios';
import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB
} from './types';

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const addTodo = (name, description, duedate, time) => async dispatch => {
  const res = await axios.post('/api/todos', { name, description, duedate, time });

  dispatch({ type: ADD_TODO, payload: {...res.data, name, description, duedate, time} });
};

export const toggleTodo = id => async dispatch => {
  const res = await axios.put(`/api/todos/${id}`);

  dispatch({ type: TOGGLE_TODO, payload: res.data });
};

export const updateTodo = (id, name, description, duedate, time) => async dispatch => {
  const res = await axios.put(`/api/todos/${id}/edit`, { name, description, duedate, time });

  dispatch({ type: UPDATE_TODO, payload: { ...res.data, name, description, duedate, time } });
};

export const deleteTodo = id => async dispatch => {
  const res = await axios.delete(`/api/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: res.data });
};

export const toggleTab = tab => async dispatch => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};
