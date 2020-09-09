const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

app.listen(port, function () {
    console.log("Server has started successfully.");
});