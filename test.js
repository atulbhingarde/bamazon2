const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
// const processsOrder = require('./processOrder');

const db = require('./models');
const expect = chai.expect;

// Setting up the chai http plugin. This plugin allows for HTTP integration testing with Chai assertions!
chai.use(chaiHttp);

// set a variable for making http requests.
let request;

describe('GET /api/stock', function() {
 request = chai.request('http://localhost:8100');
 it('should connect and get valid response and code back', function(done){
  request.get('/api/stock').end(function (err, res) 
   {
    //Save the response
    responseStatus = res.status;
    responseBody = res.body; 

    expect(responseStatus).to.equal(200);
   
    done();
   });
 });
 it('should find all stock with proper count matching expectation ', function(done){
  request.get('/api/stock').end(function (err, res) 
   {
    //Save the response
    responseStatus = res.status;
    responseBody = res.body; 

    expect(responseStatus).to.equal(200);
    expect(responseBody)
         .to.be.an('array')
         .that.has.lengthOf(12);
    done();
   });
 });
});
it('checking html routes conenct on / and return proper status back', function(done){
  request.get('/app/stock/').end(function (err, res) 
   {
    //Save the response
    responseStatus = res.status;
    responseBody = res.body; 

    expect(responseStatus).to.equal(200);
    
    done();
   });
 });
it('checking html routes conenct on /* and return proper status back', function(done){
  request.get('/app/stock/*').end(function (err, res) 
   {
    //Save the response
    responseStatus = res.status;
    responseBody = res.body; 

    expect(responseStatus).to.equal(200);
    
    done();
   });
 });
it('should find all stock with proper count matching expectation for id 1', function(done){
  request = chai.request('http://localhost:8100');
  request.get('/api/stock/1').end(function (err, res) 
   {
    //Save the response
    // responseStatus = res.status;
    // responseBody = res.body; 
    // console.log("here " + JSON.stringify(res));
    expect(responseStatus).to.equal(200);
    // expect(responseBody)
    //      .to.be.an('array')
    //      .that.has.lengthOf(12);
    done();
   });
 }); 
// it('should find all stock with proper count matching expectation for id 1', function(done){
//   // request = chai.request('http://localhost:8100');
//   request.put('/api/stock/{}').end(function (err, res) 
//    {
//     //Save the response
//     // responseStatus = res.status;
//     // responseBody = res.body; 
//     console.log("here " + JSON.stringify(res));
//     expect(responseStatus).to.equal(200);
//     // expect(responseBody)
//     //      .to.be.an('array')
//     //      .that.has.lengthOf(12);
//     done();
//    });
//  }); 
// describe('GET /api/stock', function () {
  
//   // clear the test db 
//   // beforeEach(function () {
//   //   request = chai.request(server);
//   //   return db.sequelize.sync({ force: true });
//   // });

//   it('should find all examples', function (done) {
//     //add some content to the now empty db
//     db.User.bulkCreate([
//       { username: 'Sally', password: 'test' },
//       { username: 'Lane', password: 'sample' }
//     ]).then(function () {

//       //hit the GET('/api/users') endpoint
//       request.get('/api/users').end(function (err, res) {
//         //Save the response
//         let responseStatus = res.status;
//         let responseBody = res.body;


//         //Write test expectations
//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(200);

//         expect(responseBody)
//           .to.be.an('array')
//           .that.has.lengthOf(2);

//         expect(responseBody[0])
//           .to.be.an('object')
//           .that.includes({ username: 'Sally', password: 'test' });

//         expect(responseBody[1])
//           .to.be.an('object')
//           .that.includes({ username: 'Lane', password: 'sample' });
//         done();
//       });
//     });
//   });
// });