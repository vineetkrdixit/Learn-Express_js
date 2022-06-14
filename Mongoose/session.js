const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const app = express();
const port = 2002;
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "vineet",
  })
);
app.get("/login", (req, res) => {
  if (req.session.visited) {
    console.log("session already exist");
    res.send("session already exist");
  } else {
    req.session.visited = true;
    console.log("Session Started");
    res.send("Session Started");
  }
});
app.listen(port, () => {
  console.log("Server Started at port " + port);
});
