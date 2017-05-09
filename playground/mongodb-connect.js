// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log("Connection failed");
  }
  console.log('Successfuly connected');

  // db.collection('Users').insertOne({
  //   firstName : "John",
  //   lastName : "Mayer",
  //   city : "Freiburg",
  //   age : 25
  // }, (err, result) => {
  //   if(err) return console.log(err);
  //   console.log(`Added the user: ${JSON.stringify(result.ops[0]._id)}`);
  // })

  db.close();
})
