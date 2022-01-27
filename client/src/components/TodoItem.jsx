import React, { Fragment } from 'react';

const TodoItem = ({ item, completeTodoHandler, deleteTodoHandler }) => {
  return (
    <Fragment>
      <div className={`todo ${item.complete ? 'is-complete' : ''}`}>
        <div
          className='checkbox'
          onClick={() => completeTodoHandler(item._id)}
        ></div>
        <div className='text'>{item.text}</div>
        <div
          className='delete-todo'
          onClick={() => deleteTodoHandler(item._id)}
        >
          X
        </div>
      </div>
    </Fragment>
  );
};

export default TodoItem;
