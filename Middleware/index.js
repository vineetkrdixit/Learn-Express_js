const express = require("express");
const app = express();
const port = 2299;
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body.item);
  next();
});
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body.item1);
  next();
});

app.get("/middleware", (req, res) => {
  try {
    res.send("hello world");
  } catch {
    console.log("Error");
  }
});
app.listen(port, () => {
  console.log("Server Started at Localhost : " + port);
});
