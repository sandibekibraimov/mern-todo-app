import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  COMPLETE_TODO_FAILURE,
  COMPLETE_TODO_REQUEST,
  COMPLETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
} from '../types';
import axios from 'axios';

// getting all todos from backend
export const getTodos = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });
  try {
    const response = await axios.get('/api/todos');
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TODOS_FAILURE,
      payload: error,
    });
  }
};

// complete todo action
export const completeTodo = (id) => async (dispatch) => {
  dispatch({
    type: COMPLETE_TODO_REQUEST,
  });

  try {
    const response = await axios.put(`/api/todos/${id}`);

    dispatch({
      type: COMPLETE_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: COMPLETE_TODO_FAILURE,
      payload: error,
    });
  }
};

// deleting todo from backend action
export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_TODO_REQUEST,
  });
  try {
    await axios.delete(`/api/todos/${id}`);

    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TODO_FAILURE,
      payload: error,
    });
  }
};

// adding new todo action
export const addTodo = (text) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch({
    type: ADD_TODO_REQUEST,
  });

  try {
    const response = await axios.post('/api/todos', text, config);

    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TODO_FAILURE,
      payload: error,
    });
  }
};
