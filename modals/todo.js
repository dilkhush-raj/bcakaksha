const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: String
});

const todosSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  todo: [todoSchema]
});

const Todo = mongoose.model('Todoe', todosSchema);

export default Todo;
