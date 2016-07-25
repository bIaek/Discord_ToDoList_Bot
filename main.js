var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", function(message) {
	if(message.content == "!test") {
		client.reply(message, "Test successful!");
	}
});

client.loginWithToken("MTkxMjU1MDYxNTQyNzMxNzc4.Cj3nqA.9Y0i3fjAsYCVGD6rny9S7d74fjw");
