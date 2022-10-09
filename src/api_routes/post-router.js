"use-strict";
const express = require("express");
const app = express();
const $postRouter = express.Router();
const data = [{
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
    {
        id: 121349,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
        },
        reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
        },
    },
    {
        id: 121348,
        user_id: "voyager@vugarsafarzada",
        content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
        },
        reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
        },
    },
    {
        id: 121347,
        user_id: "jeffbezos@jeffbezos29",
        content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
        },
        reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
        },
    },
    {
        id: 121346,
        user_id: "elonmusk@elon_musk",
        content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
        },
        reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
        },
    },
];

$postRouter.get("/all", LOG, (req, res) => {
    res.status(200).send(data);
});

$postRouter.get("/:id(\\d+)", LOG, (req, res) => {
    if (Number(req.params.id) <= data.length) {
        res.status(200).send(data[req.params.id]);
    } else {
        res.status(404).send({ message: "Can not found!" });
    }
});

$postRouter.post("/create/:user_id", LOG, (req, res) => {
    res.status(201).send();
    console.log(req.body);
});

$postRouter.delete("/delete/:post_id/:user_id", LOG, (req, res) => {
    res.status(202).send("deleted!");
});

function LOG(req, res, next) {
    let date = new Date();
    date = date.toString().split(" ");
    let log_date = `${date[4]} - ${date[2]}/${date[1].toUpperCase()}/${date[3]}`;
    console.log(`[${log_date}] -> (${req.method}) /api/post${req.url}/`);
    next();
}

module.exports = $postRouter;