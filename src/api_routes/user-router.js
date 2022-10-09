"use-strict";
const express = require("express");
const app = express();
const $userRouter = express.Router();
const data = [{
        user_info: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
        },
    },
    {
        user_info: {
            name: "Elon Musk",
            user_name: "@elon_musk",
        },
    },
    {
        user_info: {
            name: "Jeff Bezos",
            user_name: "@jeffBezos29",
        },
    },
];

$userRouter.get("/:user_id", (req, res) => {
    const findUser = data.find((item) => item.user_id === req.params.user_id);
    if (findUser) {
        res.status(200).send(findUser);
    } else {
        res.status(404).send({ message: "Can not found!" });
    }
});

function LOG(req, res, next) {
    let date = new Date();
    date = date.toString().split(" ");
    let log_date = `${date[4]} - ${date[2]}/${date[1].toUpperCase()}/${date[3]}`;
    console.log(`[${log_date}] -> (${req.method}) /api/user${req.url}/`);
    next();
}

(function() {
    data.forEach((item) => {
        item["user_id"] = (
            item.user_info.name.replace(/ /g, "") + item.user_info.user_name
        ).toLowerCase();
    });
})();

(function() {
    data.forEach((item) => {
        item.user_info["profilePic"] = `${item.user_info.user_name}.jpg`.replace(
            /@/g,
            ""
        );
    });
})();

module.exports = $userRouter;