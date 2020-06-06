const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("server info ↓")
        .setColor("#1D55A9")
        .setThumbnail(icon)
        .addField("Bot naam:", bot.user.username)
        .addField("Je bent gejoind op:", message.member.joinedAt)
        .addField("aantal leden:", message.guild.memberCount);


    return message.channel.send(serverEmbed);
}


module.exports.help = {
    name: "stats"
}