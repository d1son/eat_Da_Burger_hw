var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req,res) {
  burger.findAllBurgers(function(burger_data){
    res.render('index', {burger_data});
  });
});

router.post('/create', function(req, res) {
  burger.addBurger(req.body.burger_name, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.post('/update', function(req, res){
  console.log(req.body.id);
  burger.devourBurger(req.body.id, function(result){
    console.log(result);
    res.redirect('/');
  });
});  
 
