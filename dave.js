"use strict";

console.log("LOADING LIBRARIES...");

const Discord = require("discord.js");
const client = new Discord.Client();

client.login("<SECRET_BOT_TOKEN>").catch(console.error);

client.on("ready", function() {
	client.user.setActivity("Adobe After Effects CC").catch(console.error);
	console.log("READY FOR ACTION!");
});

const insults = ["UPGRADE YOUR PC", "DON'T USE EXPRESSION", "WE CANNOT HELP YOU WITHOUT YOUR SPECS", "HAVE YOU CONSIDERED ANOTHER PROFESSION?", "JUST RESHOOT IT"];

client.on("message", function(message) {
	if (message.author.bot) return;
	const content = message.content.toLowerCase();
	if (content === "!plzhelp") {
		message.channel.send(insults[Math.floor(Math.random() * insults.length)]).catch(console.error);
	}
});
