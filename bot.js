const Discord = require("discord.js");
const client = new Discord.Client();

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomlyConvertToUppercase(str) {
	if (Math.random() > 0.800) {
		str.toUpperCase();
	}
	else {
		str.toLowerCase();
	}
	return str;
}

function determineNumOfDupes() {
	var i = Math.random();
	var j;

	if (i < 0.850) {
		j = 1;
	}
	else if (i < 0.950) {
		j = 2;
	} else {
		j = 3;
	}
	return j;
}

client.on("ready", () => {
	console.log("Leggo bish");
});

client.on("message", (message) => {
	if (message.content.startsWith("re")) {
		var re = "";
		var lilRe = "";
		var i = getRndInteger(1, 30);
		while (i > 0) {
			lilRe = "";
			var j = determineNumOfDupes();

			while (j > 0) {
				lilRe += randomlyConvertToUppercase("r");
				j--;
			}

			j = determineNumOfDupes();
			while (j > 0) {
				lilRe += randomlyConvertToUppercase("e");
				j--;
			}

			re += lilRe;
			i--;
		}
		message.channel.send(re);
	}
});

client.login(process.env.BOT_TOKEN);


