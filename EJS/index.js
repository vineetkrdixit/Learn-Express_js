const express = require("express");
const app = express();
const port = 3003;
const ejs = require("ejs");
const arr = [
  { name: "vineet", phone: 9984732982, email: "vineetdixit.vns@gmail.com" },
  { name: "Dixit", phone: 9945732982, email: "vdixit.vns@gmail.com" },
];
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("pages/index", { arr: arr });
});
app.listen(port, () => {
  console.log("Server Srated at " + port);
});
