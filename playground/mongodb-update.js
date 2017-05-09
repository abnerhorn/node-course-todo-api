// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log("Connection failed");
  }
  console.log('Successfuly connected');

  // db.collection("Todos").findOneAndUpdate({
  //   _id : new ObjectID('5910ca0f9d1bbe04a4328d71')
  // },{
  //   $set : {
  //     completed : true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result)
  // },(err)=>{
  //   console.log(err)
  // })

  db.collection("Users").findOneAndUpdate({
    firstName : "Milena"
  },{
    $set : {
      lastName : "Mayer"
    },
    $inc : {
      age : 1
    }
  },{
    returnOriginal : false
  }).then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  })

  // db.close();
})
