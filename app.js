const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile("home.html", { root: path.join(__dirname, "views") });
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});