var express = require('express');
var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var LocalStrategy = require('passport-local').Strategy;
var kafka = require('./../kafka/client');


var router = express.Router();
const saltRnd = 3;

passport.use('login',new LocalStrategy(
  function(username, password, done) {
    console.log("LocalStrategy Username: ",username,"password: ",password);
    let res_result = {message:'',
                      servertoken:'',
                      status:401
                     };
      kafka.make_request('signin',{"username":username}, function(err,result){
        if(err){
          throw err;
        }else{
          //console.log("login result:",result );
          if(result){
            if(bcrypt.compareSync(password, result.password)){
              const server_token = jwt.sign({uid:result.email},utils.server_secret_key);
              res_result.servertoken = server_token;
              res_result.userinfo = {firstname:result.firstname,
                                     username:result.email
                                    };
              res_result.message = "User logged in ... ";
              res_result.status = 201;
            }else{
              res_result.message = "Wrong password !!!";
            }
            done(null,res_result);
          }else{
            res_result.message = "User does not exists !!!";
            done(null,res_result);
          }
        }
      });
 }));


router.post('/login', function(req, res, next) {
  passport.authenticate('login', function(err, result) {
      if(!err && result.status == 201) {
        return res.status(201).json(result);

      }else{
        return res.status(401).json(result);
      }

  })(req, res);

 });


 router.post('/signup',function(req, res, next){
    let res_result = {message:'',
                      servertoken:''
                     };
     let userinfo = {};
     userinfo.userName = req.body.username;
     userinfo.password = req.body.password;

    kafka.make_request('signup',{"userinfo":userinfo}, function(err,result){
      if(!err){
        //console.log("user signed up ",result);
        res.status(201).json(result);
      }else{
        res.status(401).json({});
      }
    });
  });


module.exports = router;
