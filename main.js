"use strict";
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

let hasConnection = false; //Only allow 1 user to be connected at a time

app.get("/host.html", function(req, res) {
	res.set("Blockly-EV3-On-Brick", true); // Tell the client that it is requesting the page from the ev3 brick.
	res.send("");
});

app.post("/run", bodyParser.text(), function(req, res) {
	fs.writeFile("python.main.py", req.body, function(err) {
		if (err) {
			res.status(500).end();
		} else {
			res.status(200).send("OK");
		}
	});
});

app.use(express.static("http"));

app.use(function(req, res) {
	res.redirect("/");
});

io.on("connection", function(socket) {
	if (hasConnection) {
		socket.disconnect();
		return;
	}

	console.log("User connected");
	hasConnection = true;

	socket.on("disconnect", function() {
		console.log("User disconnected");
		hasConnection = false;
	})
});

http.listen(3000, function() {
	console.log("Listening on port 3000");
});