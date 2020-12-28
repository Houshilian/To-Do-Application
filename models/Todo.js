const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  description:{
    type: String
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  duedate:{
    type: String
  },
  time:{
    type: String
  }
});
mongoose.model('todos', todoSchema);
