const express = require('express');

const router = express.Router();
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require('../controllers/todo.controllers');

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);

module.exports = router;
