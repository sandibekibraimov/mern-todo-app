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
  ADD_TODO_SUCCESS,
  ADD_TODO_REQUEST,
} from '../types';

const initialState = {
  list: [],
  item: null,
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS_REQUEST:
    case COMPLETE_TODO_REQUEST:
    case DELETE_TODO_REQUEST:
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      };

    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo._id === payload._id) {
            todo.complete = payload.complete;
          }
          return todo;
        }),
        loading: false,
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        list: state.list.filter((todo) => todo._id !== payload),
        loading: false,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        list: [...state.list, payload],
        loading: false,
      };

    case GET_TODOS_FAILURE:
    case COMPLETE_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
