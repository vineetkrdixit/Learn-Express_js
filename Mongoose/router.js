const express = require("express");
const app = express();
const port = 2001;
app.use(express.json());

app.get("/home/:userid/post/:postid", (req, res) => {
  res.send(req.params);
  console.log(req.body);
});

app
  .route("/products")
  .get((req, res) => {
    res.send("Get has been called");
  })
  .post((req, res) => {
    res.send("Post has been called");
  })
  .put((req, res) => {
    res.send("Put has been called");
  });

app.listen(port, () => {
  console.log("Server Started at port " + port);
});
