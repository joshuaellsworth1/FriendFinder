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

        var Name = '';
        var image = '';
        var totalDifference = 100

        