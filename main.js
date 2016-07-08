"use strict";
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const child_process = require("child_process");
const StringDecoder = require("string_decoder").StringDecoder;
const SSHClient = require("ssh2").Client;

let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

let client = new SSHClient();
let sftp;
client.on("ready", function() {
	console.log("Connected to brick");

	client.sftp((err, ftp) => {
		if (err) {
			error("Can not establish ftp connection");
		}

		sftp = ftp;
	});
}).connect({
	host: process.argv[1], //IP of the brick
	port: 22,
	username: "robot",
	password: "maker"
});

function runProgram(socket) {
	client.exec("python ~/Blockly-EV3/main.py", (err, stream) => {
		
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
				sftp.fastPut("python/main.py", "~/Blockly-EV3/main.py", (err) => {
					if (err) {
						socket.emit("exec_log", "Error: Can not transmit program to EV3");
						socket.emit("exec_done");
					}

					runProgram(socket);
				});
			}
		});
	});

	socket.on("exec_end", function() {
		
	});
});

http.listen(3000, function() {
	console.log("Listening on port 3000");
});