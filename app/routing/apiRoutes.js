var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "home.js"));
  });

  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });