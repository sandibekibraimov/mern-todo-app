const Todo = require('../models/Todo.model');

const getTodos = async (req, res) => {
  try {
    const response = await Todo.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send('Server error');
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Todo.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send('Server error');
    console.log(error);
  }
};

const createTodo = async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
  });
  try {
    const todo = await newTodo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send('Server error');
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ msg: 'There is no todo with such ID' });
    }

    await todo.remove();
    res.status(200).json({ msg: 'Todo removed successfully' });
  } catch (error) {
    res.status(500).send('Server error');
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    todo.complete = !todo.complete;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send('Server error');
    console.log(error);
  }
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
