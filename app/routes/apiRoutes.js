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
        var bestDifference = 50;

        console.log(user);

        // Looks through our friends for comparison in the inner loop
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i].name);
            // console.log(friends[i].scores);
            var totalDifference = 0;

            // Compares scores of friends[i] with user.scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                //console.log(friends[i].scores[j]);
                //console.log(user.scores[j]);
                var scoreDifference = Math.abs(friends[i].scores[j] - parseInt(user.scores[j])); 
                //console.log(difference)
                totalDifference += scoreDifference;
                // console.log("Friend: " + friends[i].name);
                // console.log("Friend Score: " + friends[i].scores[j]);
                // console.log("User Score: " + user.scores[j]);
                // console.log("Score Difference " + j + ": " + scoreDifference);
                // console.log("Total Difference: " + totalDifference);
                // console.log("------------------------");
            }

            if (bestDifference > totalDifference) {
                bestDifference = totalDifference; // Update the bestDifference with the new totalDifference if it is less
                match = i; // Update the index of the new best match
            }

        }

        console.log("------------------------");
        console.log("Best Match: " + friends[match].name);
        console.log("Best Difference: " + bestDifference);

        friends.push(user);
        res.json(friends[match]);
    });
}