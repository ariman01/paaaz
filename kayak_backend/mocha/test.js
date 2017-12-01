var assert = require('chai').assert;
var first = require('../routes/flights.js');
//var request = require("request");
var expect = require("chai").expect;
var baseurl = "http://localhost:3010";
var util = require("util");
var app = require('../app.js')
var chai = require("chai");
var chaiHttp = require('chai-http');
chai.use(chaiHttp);



//  Test Case 1 : base url negative testing
describe("HomePage", function() {
    describe("Hit The Base URL", function() {
        it("Should return 404 response", function(done) {
            // Send some Form Data
             chai.request("http://localhost:3010/se")
            .get('/')
            
            .end(function (err, res) {
                expect(res).to.have.status(404);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


//  Test Case 2 : base url testing.
describe("HomePage", function() {
    describe("Hit The Base URL", function() {
        it("Should return 200 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/')
            
            .end(function (err, res) {
                expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});

// Test Case 3 :
describe("HomePage", function() {
    describe("Hit The Base URL", function() {
        it("Should return 200 response", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/flights/searchflights')
            .send({
            start_date: '2017/10/10', 
            src_city: 'LAX',
            destination_city:'ORD'
            })
            
            
            .end(function (err, res) {
                expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});

/*

describe("SignupTesting", function() {
    describe("Send User Details", function() {
        it("User should be Registered Successfully", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .post('/afterSignUp')
            .send({
            Fname: 'Aviral', 
            Lname: 'Kumar',
            email:'avi@gmail.com',
            pwd:'dollar'
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("Directory Creation", function() {
    describe("Send Email Address", function() {
        it("Directory Should Be Created", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/afterSignIn/createdir')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("SignupPage", function() {
    describe("Send Username", function() {
        it("get The User Employee ID", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/signup')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("HomePage", function() {
    describe("Hit The Base URL", function() {
        it("Home Page Should Be Displayed", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/')
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});



describe("Groups", function() {
    describe("Send Username", function() {
        it("get The User Employee ID", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/afterSignIn/Groups')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("ListFiles", function() {
    describe("Send Username", function() {
        it("get The User Employee ID", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/afterSignIn/listfiles')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("Addmem", function() {
    describe("Send Username", function() {
        it("get The User Employee ID", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/afterSignIn/Groups/amem')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("About user", function() {
    describe("User Information Page Should be Displayed", function() {
        it("Display User Details Page", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/AboutUser')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


describe("ABout user info", function() {
    describe("Send Username", function() {
        it("get The User Employee ID", function(done) {
            // Send some Form Data
             chai.request(baseurl)
            .get('/AboutUser/Info')
            .send({
            val: 'chabra2@gmail.com', 
            
            })
            
            .end(function (err, res) {
            	expect(res).to.have.status(200);
               // expect(res.param.inputUsername).to.equal("chabra@gmail.com");               
                done();
            });
             
        });

    });
});


*/