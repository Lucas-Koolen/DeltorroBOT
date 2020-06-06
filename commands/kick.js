//----------------------------------
//           in onderhoud
//----------------------------------
const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

     //!kick @gebruiker reden hier. nog mee bezig :(
     
    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if(!kickUser) return message.channel.send("Gebruiker niet gevonden");

    var reason = arguments.join(" ").slice(22); //// fout

    if(!message.member.hasPermession("MANAGE_MESSAGES")) return message.channel.send("Bro, dit command kun je niet gebruiken");

    if(kickUser.hasPermession("MANAGE_MESSAGES")) return message.channel.send("He? Deze gebruiker is admin");

    var kick = new discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#EDA7A7")
    .addField("Gekickte gebruiker", kickUser)
    .addField("Gekicked door", message.author)
    .addField("Reden", reason);

    var kickChannel = message.guild.channels.find(`name`, "staff")
    if(!kickChannel) return message.guild.send("Kan kanaal niet vinden")

    message.guild.member(kickUser).kick(reason);


    kickChannel.send(kick);

    return;
}


module.exports.help = {
    name: "kick"
}