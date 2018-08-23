const Discord = require('discord.js');

const TOKEN = "NDc1MDQzOTY3OTczNTg4OTky.DkZXMQ.1mIJ6uxBY7J9TjpOtHQaVFumZyg";
const PREFIX = "!";

var bot = new Discord.Client();

var embed = new Discord.RichEmbed()

bot.on("ready", function() {
    console.log("Bot Is Goed Opgestart.");
});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
