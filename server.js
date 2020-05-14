// require modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const PORT = 3000;

// initialize application
const app = express();
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))



// database connection
mongoose.connect("mongodb://localhost:27017/secretsUserDB", { useNewUrlParser: true,useUnifiedTopology: true })

const userSchema = {
  email:String,
  password:String
}

const User = mongoose.model("User", userSchema);
// home route
app.get("/", function(req, res){
  console.log("This is text response!");
  res.render("home")
})


// login route
app.get("/login", function(req, res){
  res.render("login")
})

app.post("/login", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email:username}, function(err, foundUser){
    if(err){
      console.log(err);
    }else{
      if (foundUser){
        if(foundUser.password === password){
          res.render("secrets")
        }
      }
    }
  })
});

// register route
app.get("/register", function(req, res){
  res.render("register")
});

app.post("/register", function(req, res){
  const newUser = new User({
    email:req.body.username,
    password:req.body.password
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("login")
    }
  })
});



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
