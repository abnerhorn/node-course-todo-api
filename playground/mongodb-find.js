// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log("Connection failed");
  }
  console.log('Successfuly connected');

  // db.collection("Todos").find({
  //   _id : new ObjectID('5910c9679674db28dc2809e6')
  // }).toArray().then((docs) => {
  //
  //   for(doc in docs){
  //     console.log(docs[doc].text);
  //   }
  //
  // },(err) => {
  //   console.log(err);
  // });

  // db.collection("Todos").find().count().then((count) => {
  //
  //   console.log(`Count: ${count} todos`)
  //
  // },(err) => {
  //   console.log(err);
  // });

  db.collection("Users").find({
    firstName : "John"
  }).toArray().then((docs) => {
    for (i in docs){
      console.log(`${docs[i].firstName} - ID: ${docs[i]._id}`);
    }

  },(err) => {
    console.log(err);
  })

  db.close();
})
