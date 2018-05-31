const Discord = require("discord.js");
const client = new Discord.Client();

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomlyConvertToUppercase(str) {
	if (Math.random() > 0.800) {
		str = str.toUpperCase();
	}
	else {
		str = str.toLowerCase();
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

function downInTheDM(userToSend, messageToSend) {
	userToSend.send(messageToSend);
}

client.on("ready", () => {
	console.log("Leggo bish");
});

client.on("message", (message) => {
	if (message.content.includes("beseech")) {
		var messageToSend = "";
		var userToSend = message.mentions.users.first();

		message.channel.send("Indubitably, my good fellow.");

		// sending the message

		messageToSend = "Just let it happen";
		downInTheDM(userToSend, messageToSend);

		var i = 0;
		while (i < 10) {
			messageToSend = "re";

			var j = 0;
			var numOfEs = getRndInteger(0, 20);
			while (j < numOfEs) {
				messageToSend += "e";
				j++;
			}

			if (Math.random() > 0.500) {
				messageToSend = messageToSend.toUpperCase();
			}

			setTimeout(downInTheDM, 1000 * 60, userToSend, messageToSend);
			i++;
		}
	} else if ((message.content.startsWith("re") || message.content.startsWith("rE") || message.content.startsWith("RE") || message.content.startsWith("Re")) && !(message.author.bot)) {
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