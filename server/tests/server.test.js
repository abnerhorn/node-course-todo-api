const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/Todo');

const todos = [{
  _id : new ObjectID(),
  text: "Test todo1"
},{
  _id : new ObjectID(),
  text : "Test todo2"
}]
var i=0;

beforeEach((done) => {
  i = i+1;
  console.log(i);
  Todo.remove({}).then(()=>{

    return Todo.insertMany(todos);
  }).then(() => done())
});

// describe('POST /todos', (() => {
//    it('should create a new todo',(done) => {
//      var text = 'Test todo text';
//
//
//
//      request(app)
//       .post('/todos')
//       .send({text})
//       .expect(200)
//       .expect((res)=>{
//         expect(res.body.text).toBe(text);
//       })
//       .end((err,res) => { //The end gets a function because it's async
//         if (err) {
//           return done(err);
//         }
//
//         Todo.find({text}).then((todos)=>{
//           expect(todos.length).toBe(1);
//           expect(todos[0].text).toBe(text);
//           done();
//         }).catch((e) => done(e));
//       })
//    })
//
//     it('should not create a new todo',(done) => {
//       request(app)
//         .post('/todos')
//         .send()
//         .expect(400)
//         .end((err,res) => {
//           if(err){return done(err)}
//
//           Todo.find().then((res)=>{
//             expect(res.length).toBe(2);
//             done();
//           }).catch((e)=>done(e));
//         })
//     })
//
// }))
//
// describe("GET /todos",()=>{
//   it("should get 2 todos",(done)=>{
//     request(app)
//       .get('/todos')
//       .expect(200)
//       .expect((res)=>{
//         expect(res.body.todos.lenght).toBe(2);
//       })
//       .end(done())
//   })
// });

//
describe("GET /todos/:id",()=>{
  // it("should return todo  doc",(done) => {
  //   request(app)
  //     .get(`/todos/${todos[0]._id}`)
  //     .expect(200)
  //     .expect((res)=>{
  //       expect(res.body.doc.text).toBe(todos[0].text)
  //     })
  //     .end(done())
  // })

  it("should return 404 if can't find todo",(done) =>{
    request(app)
      .get(`/todos/${(new ObjectID()).toHexString()}`)
      .expect(400)
      .end(done())
  })

  it("should return 404 if can't find todo",(done) =>{
    request(app)
      .get(`/todos/1234`)
      .expect(404)
      .end(done())
  })

})
