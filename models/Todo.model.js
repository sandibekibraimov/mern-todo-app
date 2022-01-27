const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Todo = model('todo', TodoSchema);
module.exports = Todo;
