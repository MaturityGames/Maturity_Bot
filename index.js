const Discord = require('discord.js');

const TOKEN = "NDc1MDQzOTY3OTczNTg4OTky.DkZXMQ.1mIJ6uxBY7J9TjpOtHQaVFumZyg";
const PREFIX = "!";

var bot = new Discord.Client();

var embed = new Discord.RichEmbed()

bot.on("ready", function() {
    console.log("Bot Is Goed Opgestart.");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("pong!");
            break;
        default:
            message.channel.sendMessage("Deze commando herk ik niet.");
            
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("YouTube And Twitch", "!Youtube \n!Twitch")
                .addField("Social Media", "!Instagram \n!Twitter")
                .setColor(0xcc3300)
                .setFooter("HAVE FUN!!!")
                .setThumbnail(bot.user.avatarURL)
            message.channel.sendEmbed(embed);
            break;

        case "youtube":
        var embed = new Discord.RichEmbed()
                .addField("This is my YouTube channel - https://www.youtube.com/channel/UCiHgL62_3EhDKIZ_C7Lu87A?view_as=subscriber")
                .setColor(0xcc3300)
                .setThumbnail(bot.user.avatarURL)
                .setFooter("HAVE FUN!!!")
            message.channel.sendEmbed(embed);
            break;

            case "twitch":
            var embed = new Discord.RichEmbed()
                    .addField("This is my Twitch streaming channel - https://www.twitch.tv/maturity_games77")
                    .setColor(0xcc3300)
                    .setThumbnail(bot.user.avatarURL)
                    .setFooter("HAVE FUN!!!")
                message.channel.sendEmbed(embed);
                break;

            case "twitter":
            var embed = new Discord.RichEmbed()
                    .addField("This is my Twitter account - https://twitter.com/search?q=maturity+games")
                    .setColor(0xcc3300)
                    .setThumbnail(bot.user.avatarURL)
                    .setFooter("HAVE FUN!!!")
                message.channel.sendEmbed(embed);
                break; 
                
             case "instagram":
              var embed = new Discord.RichEmbed()
                    .addField("This is my Instagram account - https://www.instagram.com/maturity_games/")
                     .setColor(0xcc3300)
                     .setThumbnail(bot.user.avatarURL)
                     .setFooter("HAVE FUN!!!")
                 message.channel.sendEmbed(embed);
                break; 
    }
});

bot.login(TOKEN);
