import React from 'react';

const Modal = ({ setPopUpActive, text, setText, addTodoHandler }) => {
  const add = () => {
    addTodoHandler({ text });
    setPopUpActive(false);
    setText('');
  };

  return (
    <div className='modal'>
      <div className='closeModal' onClick={() => setPopUpActive(false)}>
        X
      </div>

      <div className='modal-content'>
        <h3>Add new task</h3>
        <input
          type='text'
          className='content-input-todo'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={add}>Add todo</button>
      </div>
    </div>
  );
};

export default Modal;
