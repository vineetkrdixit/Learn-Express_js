const express = require("express");
// const { get } = require("express/lib/response");
const app = express();
const mongoose = require("mongoose"); //using the module to connect to mongodb
const port = 3004;
app.use(express.json()); //using the express in a json format
mongoose.connect(
  "mongodb+srv://restaurant:123Computer@restaurant.gjijhvc.mongodb.net/?retryWrites=true&w=majority"
); //connect to given database
const connection = mongoose.connection; // established connection with database
const item = new mongoose.Schema({
  // Creating a Schema
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
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
});

const Item = connection.model("User", item);
//Creating a new file to add into database

const newitem = new Item({
  UserName: "Vinni",
  Password: "sdjdwj3",
  Email: "s@jhsd.com",
  FirstName: "Vineetdicitjdjdjdjdj",
  LastName: "Dixitjddjdj",
  City: "Delhi",
});
//Created an end point where we can hit this url and data is saved to db
app.get("/add", (req, res) => {
  newitem.save((err) => {
    if (err) {
      console.log("error");
    } else {
      res.send("Saved Sucessfully");
    }
  });
});

// app.get("/", (req, res) => {
//   try {
//     res.send("Hello from mongoose");
//   } catch {
//     console.log("Error occured");
//   }
// });

//Setting up Post request to get data from frontend
app.post("/dataadded", (req, res) => {
  console.log(req.body);
  const values = new Item(req.body);
  values.save((err) => {
    if (err) {
      console.log("Error");
    } else {
      res.send("Data Added Successfully");
    }
  });
});
//setting up get request for the filter((getting)) all data from database
app.get("/fetchData", (req, res) => {
  Item.find({}, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
//setting up filter request to get the data from database
app.get("/filtername", (req, res) => {
  Item.find({ UserName: { $eq: req.body.UserName } }, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//setting up filter for 2 things request to get data from database
app.get("/search", (req, res) => {
  Item.find(
    { UserName: { $eq: req.body.UserName }, City: { $eq: req.body.City } },
    (err, result) => {
      if (err) {
        console.log("error");
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

//Setting a endpoint for Update into a Database

app.put("/update", (req, res) => {
  Item.updateOne(
    { UserName: req.body.UserName },
    { City: req.body.City },
    (err) => {
      if (err) {
        console.log("Error");
      } else {
        res.send("Data Updated Successefully");
      }
    }
  );
});

//Seeting up a end point to perform delete in database
app.delete("/delete", (req, res) => {
  Item.deleteOne({ UserName: req.body.UserName }, (err) => {
    if (err) {
      console.log("Error");
    } else {
      res.send("Deleted Successfully");
    }
  });
});

//Seeting Up Authentication for login through database content

// app.post("/auth", (req, res) => {
//   Item.find({}, (err, result) => {
//     if (err) {
//       console.log("Error");
//     } else {
//       res.send("Authorized User Successfully");
//     }
//   });
// });
app.listen(port, () => {
  console.log("Server Started at Localhost : " + port);
});
