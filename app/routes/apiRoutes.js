var friends = require("../data/friends");
// var express = require("express");
// var app = express();

module.exports = function (app) {

    //This will display a JSON of possible friends - GET
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var response = user.score;
        var name = "";
        var image = "";

        // function difference(a, b) {
        //     return Math.abs(a - b);
        //   }

        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < response.length; j++) {
            }
        }
        friends.push(user);
        res.json({ name: name, image: image });
    });
}