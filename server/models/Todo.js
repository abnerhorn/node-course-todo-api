var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text : {
    type : String,
    required : true,
    minlength : 1,
    trim : true //removes extra spaces
  },
  completed : {
    type : Boolean,
    default : false
  },
  completedAt : {
    type : Number,
    default : null
  }
});

module.exports = {Todo};
