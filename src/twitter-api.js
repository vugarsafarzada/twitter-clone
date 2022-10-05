const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const postRouter = require("./api_routes/post-router");

require("dotenv").config({ path: "./.env" });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;
const host = process.env.HOST;
const protocol = process.env.PROTOCOL;

app.use("/api/post", postRouter);

app.listen(port, () => {
    console.clear();
    console.log(`Node app is running on ${protocol}://${host}:${port}`);
});