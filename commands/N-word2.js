const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("N-word pass granted");   	


}


module.exports.help = {
    name: "N-word"
}