var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });