var friends = require("../data/friends");
// var express = require("express");
// var app = express();

module.exports = function (app) {

    //This will display a JSON of possible friends - GET
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var answer = req.body;

        var response = answer.score;

        var name = '';
        var image = '';
        var totalDifference = 100

        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < response.length; j++) {
                diff += Math.abs(friends[i].score[j] - res[j]);
            }
        }
        if (diff < totalDifference) {
            console.log('friend found = ' + diff)
            console.log('Name of Friend =' + friends[i].name);
            console.log('Friends image = ' + friends[i].image);

            totalDifference = diff;
            name = friends[i].name;
            image = friends[i].photo;
        }
    });
    friends.push(answer);
    res.json({ name: name, image: image });
}