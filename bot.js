const Discord = require("discord.js");
const client = new Discord.Client();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("re")) {
	var re = "";
	var lilRe = "";
	var i = getRndInteger(1, 30);
	while (i > 0) {
		lilRe = "";
		if (Math.random() > 0.500) {
			lilRe += "R"
		} else {
			lilRe += "r"
		}

		if (Math.random() > 0.500) {
			lilRe += "E"
		} else {
			lilRe += "e"
		}
		re += lilRe;
		i--;
	}
    message.channel.send(re);
  }
});

client.login(process.env.BOT_TOKEN);