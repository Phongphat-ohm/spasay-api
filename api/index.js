const express = require('express');

const app = express();
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api", (req, res) => {
    res.send("this is a api")
})

module.exports = app;