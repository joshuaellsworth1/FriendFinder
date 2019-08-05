var surveyData = require("../data/friends");
// var express = require("express");
// var app = express();

module.exports = function (app) {

    //This will display a JSON of possible friends - GET
    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
    });

    app.post("/api/friends", function (req, res) {
        if (surveyData.length == res) {
            surveyData.push(req.body);
            res.json(true);
        }
        else {
            ("Sorry no Matches")
            res.json(false);
        }
    });
}