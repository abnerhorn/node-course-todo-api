// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log("Connection failed");
  }
  console.log('Successfuly connected');

  //delete many

  // db.collection("Todos").deleteMany({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log(err);
  // });

  //delete one

  // db.collection("Todos").deleteOne({text : 'Die'}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log(err);
  // });

  //find one and delete

  // db.collection("Todos").findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log(err);
  // })

  db.collection("Users").deleteMany({firstName : "John"}).then((result) => {
    console.log(JSON.stringify(result,undefined,2));
  },(err) => {
    console.log(err);
  })

  db.collection("Users").findOneAndDelete({
    _id : new ObjectID('5910cbde7e0e3b2544640f91')
  }).then((res) => {
    console.log(`${res.value.text} was deleted`);
  },(err) => {
    console.log(err);
  })

  // db.close();
})
