const express = require("express");
const app = express();
const postRouter = require("./api_routes/post-router");
require("dotenv").config({ path: "./.env" });
const port = process.env.NODE_APP_PORT;
const host = process.env.NODE_APP_HOST;
const protocol = process.env.NODE_APP_PROTOCOL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        `http://localhost:${process.env.PORT}`
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use("/api/post", postRouter);

app.listen(port, () => {
    console.clear();
    console.log(`Node app is running on ${protocol}://${host}:${port}`);
});