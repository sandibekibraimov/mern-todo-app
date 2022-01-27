import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../components/TodoList';

import {
  getTodos,
  completeTodo,
  deleteTodo,
  addTodo,
} from '../redux/actions/todo.actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // status change of a todo
  const completeTodoHandler = (id) => {
    if (id) {
      dispatch(completeTodo(id));
    }
    dispatch(getTodos());
  };

  // deleting a todo
  const deleteTodoHandler = (id) => {
    if (id) {
      dispatch(deleteTodo(id));
    }
    dispatch(getTodos());
  };

  // add new todo
  const addTodoHandler = (newTodo) => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
    }
    dispatch(getTodos());
  };

  // return of JSX
  return (
    <div className='home'>
      <Header />
      <TodoList
        completeTodoHandler={completeTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
        addTodoHandler={addTodoHandler}
      />
    </div>
  );
};

export default Home;
