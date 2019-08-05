var path = require("path");
var express = require("express");
var app = express();

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
};