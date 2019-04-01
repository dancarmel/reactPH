const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const index = require("./client/public/index.html");

app.post("/api/", (req, res) => {
  const url = req.body;
  console.log(url);
  res.send({ url: url });
});

app.get("/", (req, res) => {
  res.send(index);
});

app.listen(port, () => console.log(`Example app listening on port port!`));
