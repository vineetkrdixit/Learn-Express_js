const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const crypto = require("crypto");

const key = "SecretKey";

app.post("/createHash", (req, res) => {
  crypto.createHash("sha256", key).update(req.body.password).digest("hex");
  console.log(
    crypto.createHash("sha256", key).update(req.body.password).digest("hex")
  );
  res.send(
    crypto.createHash("sha256", key).update(req.body.password).digest("hex")
  );
});

app.listen(port, () => {
  console.log("Server strated at port " + port);
});
