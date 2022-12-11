const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/name", (req, res) => {
  res.send(`The Name is ${process.env.NAME}`);
});

app.listen(9000, () => {
    
  console.log("Listening on port");
});
