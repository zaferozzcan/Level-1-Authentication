// require modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const PORT = 3000;

const app = express();
app.set("view engine", "ejs")

// home route
app.get("/", function(req, res){
  console.log("This is text response!");
  res.render("home")
})


// login route
app.get("/login", function(req, res){
  res.render("login")
})


// register route
app.get("/register", function(req, res){
  res.render("register")
})

// secrets route
app.get("/secrets", function(req, res){
  res.render("secrets")
})

// submit route
app.get("/submit", function(req, res){
  res.render("submit")
})





app.listen(PORT, function(){
  console.log("Server is running on port 3000");
})
