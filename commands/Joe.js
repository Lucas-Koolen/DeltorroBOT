const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Who is Joe?");   	


}


module.exports.help = {
    name: "joe"
}