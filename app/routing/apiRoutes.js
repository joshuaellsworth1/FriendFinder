var surveyData = require("../data/friends");
var express = require("express");
var app = express();

module.exports = function (app) {

    //This will display a JSON of possible friends - GET
    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
    });

    app.post("/api/friends", function (req, res) {
        if (surveyData.length < 5) {
            surveyData.push(req.body);
            res.json(true);
        }
        else {
            res.jason(false);
        }
    });

    app.post("/api/clear", function (req, res) {
        surveyData.length = 0;
        res.json({ ok: true });
    });
}