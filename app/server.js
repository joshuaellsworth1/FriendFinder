var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

var friends = [
    {
        name: "Dan",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            4,
            4,
            4,
            5,
            3,
            2,
            5,
            4,
            2
        ]
    },
    {
        name: "Sam",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            1,
            1,
            1,
            4,
            5,
            1,
            2,
            1,
            4,
            1
        ]
    },
    {
        name: "Sarah",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            3,
            1,
            4,
            4,
            3,
            1,
            2,
            3,
            4,
            1
        ]
    },
    {
        name: "George",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            2,
            1,
            4,
            2,
            5,
            3,
            2,
            5,
            1,
            1
        ]
    }
]
