import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import Modal from './Modal';

const TodoList = ({
  completeTodoHandler,
  deleteTodoHandler,
  addTodoHandler,
}) => {
  const { list, loading, error } = useSelector((state) => state.todos);

  const [popUpActive, setPopUpActive] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className='todos'>
      {loading && <h2>loading...</h2>}
      {error && <h2>Something went wrong.. please try again.</h2>}

      {list.length > 0 &&
        list !== null &&
        list.map((item) => (
          <TodoItem
            item={item}
            key={item._id}
            completeTodoHandler={completeTodoHandler}
            deleteTodoHandler={deleteTodoHandler}
          />
        ))}
      <div className='addPopup' onClick={() => setPopUpActive(true)}>
        +
      </div>
      {popUpActive ? (
        <Fragment>
          <Modal
            setPopUpActive={setPopUpActive}
            text={text}
            setText={setText}
            addTodoHandler={addTodoHandler}
          />
        </Fragment>
      ) : (
        ''
      )}
    </div>
  );
};

export default TodoList;
