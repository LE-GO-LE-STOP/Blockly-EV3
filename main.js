"use strict";
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();

function save(data, callback) {
	fs.writeFile("python/main.py", data, callback)
}

app.post("/save", bodyParser.text(), function(req, res) {
	save(req.body, function(err) {
		if (err) {
			res.status(500).end();
		} else {
			res.status(200).send("OK");
		}
	});
});

app.post("/run", bodyParser.text(), function(req, res) {
	save(req.body, function(err) {
		if (err) {
			res.status(500).end();
		} else {
			res.status(200).send("OK");
		}
	});
});

app.use(express.static("http"));

app.listen(3000, function() {
	console.log("Listening on port 3000");
});