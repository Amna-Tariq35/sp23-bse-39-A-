const express = require("express");
let app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/cv", (req, res) => {
  res.render("cv");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5000, () => {
  console.log("Server started at localhost:5000");
});
