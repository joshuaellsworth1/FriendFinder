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
        var match = 0;
        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);

        }
        for (var j = 0; j < friends.scores.length; j++) {
            console.log(friends.scores[j]);
            console.log(user.scores[j]);
            var difference = Math.abs(friends.length[j] - user.length[j]); {
                if (totalDifference += difference)
                    return (true);
            }
        }
        // for (var i = 0; i < user.length; i++) {
        //     console.log(user.length[i])
        // }

        friends.push(user);
        res.json({ name: name, image: image });
    });
}