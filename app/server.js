var express = require("express");
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });

//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});