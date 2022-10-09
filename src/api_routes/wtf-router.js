"use-strict";
const express = require("express");
const app = express();
const $wtfRouter = express.Router();
const data = [{
        name: "Elon Musk",
        user_name: "elon_musk",
        profile_pic: "elon_musk.jpg",
    },
    {
        name: "Jeff Bezos",
        user_name: "jeffBezos29",
        profile_pic: "jeffBezos29.jpg",
    },
];

$wtfRouter.get("/:user_id", LOG, (req, res) => {
    res.status(200).send(data);
});

function LOG(req, res, next) {
    let date = new Date();
    date = date.toString().split(" ");
    let log_date = `${date[4]} - ${date[2]}/${date[1].toUpperCase()}/${date[3]}`;
    console.log(`[${log_date}] -> (${req.method}) /api/wtf${req.url}/`);
    next();
}

module.exports = $wtfRouter;