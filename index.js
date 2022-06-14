const express = require("express");
const app = express();
const path = require("path");
app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch {
    console.log("Error");
  }
});
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(3000, () => {
  console.log("Server Started at Localhost 3000");
});
