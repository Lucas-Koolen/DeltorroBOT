const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("Discord bot info ↓")
        .setColor("#7C1414")
        .setThumbnail(botIcon)
        .addField("Bot naam:", bot.user.username)
        .addField("Bot gemaakt door:", "LBJ_Deltorro#1720")
        .addField("gemaakt op:", bot.user.createdAt);

    return message.channel.send(botEmbed);  	
}


module.exports.help = {
    name: "info"
}