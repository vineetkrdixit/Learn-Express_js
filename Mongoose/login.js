const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3004;
app.use(express.json()); //Telling Exprees to use Json Format Data
mongoose.connect("mongodb://localhost:27017/login"); // Sendng connection request to given database
const connection = mongoose.connection; //establish the connection
const loginSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});
const userDB = connection.model("userdetails", loginSchema);

//saving user given data into database

app.post("/login", (req, res) => {
  console.log(req.body);
  const values = new userDB(req.body);
  values.save((err) => {
    if (err) {
      console.log("Error");
    } else {
      res.send("Data Added");
    }
  });
});
//checking authentication
app.post("/authorize", (req, res) => {
  userDB.find({ UserName: req.body.UserName }, (err, result) => {
    if (req.body.Password == result[0].Password) {
      console.log(result[0].Password);
      res.send("User Found");
    } else {
      res.send("User Not Found");
    }
    console.log(result);
  });
});

app.listen(port, () => {
  console.log("Server Started at Localhost : " + port);
});
