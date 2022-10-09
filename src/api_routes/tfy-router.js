"use-strict";
const express = require("express");
const app = express();
const $tfyRouter = express.Router();
const data = [{
        subject: "Trending in Azerbaijan",
        name: "#National",
        tweets: 6055,
    },
    {
        subject: "Trending",
        name: "Slava Ukraini",
        tweets: 62300,
    },
    {
        subject: "Trending",
        name: "Grain",
        tweets: 2069,
    },
    {
        subject: "Trending",
        name: "Ubuntu",
        tweets: 4291,
    },
    {
        subject: "Trending",
        name: "Tubbo",
        tweets: 3476,
    },
    {
        subject: "Trending",
        name: "OURPLE",
        tweets: 3378,
    },
    {
        subject: "Trending",
        name: "Episode 6",
        tweets: 21000,
    },
    {
        subject: "Trending",
        name: "President",
        tweets: 832000,
    },
    {
        subject: "Trending",
        name: "Sony",
        tweets: 6055,
    },
    {
        subject: "Trending",
        name: "#RANBOO",
        tweets: 6055,
    },
];

$tfyRouter.get("/:user_id", LOG, (req, res) => {
    res.status(200).send(data);
});

function LOG(req, res, next) {
    let date = new Date();
    date = date.toString().split(" ");
    let log_date = `${date[4]} - ${date[2]}/${date[1].toUpperCase()}/${date[3]}`;
    console.log(`[${log_date}] -> (${req.method}) /api/tfy${req.url}/`);
    next();
}

module.exports = $tfyRouter;