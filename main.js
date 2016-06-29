"use strict";
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const child_process = require("child_process");
const StringDecoder = require("string_decoder").StringDecoder;

let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

let spawn;
function createNewChildProcess(socket) {
	spawn = child_process.spawn("python", ["python/main.py"]);
	console.log("Spawned process");
	socket.emit("exec_log", "Program started");

	spawn.stdout.on("data", function(data) {
		let str = (new StringDecoder("utf8")).write(data);
		console.log(str);
		socket.emit("exec_log", str);
	});

	spawn.stderr.on("data", function(data) {
		let str = (new StringDecoder("utf8")).write(data);
		console.log(str);
		socket.emit("exec_log", str);
	});

	spawn.on("close", function(code) {
		console.log("Spawn done");
		socket.emit("exec_log", "Program done");
		socket.emit("exec_done");
	});
}

let hasConnection = false; //Only allow 1 user to be connected at a time

app.get("/host.html", function(req, res) {
	res.set("Blockly-EV3-On-Brick", true); // Tell the client that it is requesting the page from the ev3 brick.
	res.send("");
});

app.use(express.static("http"));

app.use(function(req, res) {
	res.redirect("/");
});

io.on("connection", function(socket) {
	if (hasConnection) {
		socket.emit("server_busy");
		socket.disconnect();
		return;
	}

	console.log("User connected");
	hasConnection = true;

	socket.on("disconnect", function() {
		console.log("User disconnected");
		hasConnection = false;
	});

	socket.on("run", function(data) {
		fs.writeFile("python/main.py", data, function(err) {
			if (err) {
				socket.emit("exec_log", "Error: Can not write program to file!");
				socket.emit("exec_done");
			} else {
				createNewChildProcess(socket);
			}
		});
	});

	socket.on("exec_end", function() {
		spawn.kill();
		console.log("Killing spawn...")
	});
});

http.listen(3000, function() {
	console.log("Listening on port 3000");
});