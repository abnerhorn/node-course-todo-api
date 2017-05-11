var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/User');
var {Todo} = require('./models/Todo');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var newtodo = new Todo({
    text : req.body.text
  });
  newtodo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  })
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos)=>{
    res.status(200).send({todos}); //use objects for more flexibility
  }).catch((e)=>{
    res.status(400).send(e);
  })
})

app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
      return res.status(404).send("Invalid ID")
  }
  Todo.findById(id).then((doc) =>{
    if(!doc){
      return res.status(400).send("Couldn't find it");
    }
    res.status(200).send({doc});
  }).catch((e)=>{
    res.status(400).send(e)
  });

})

app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};
