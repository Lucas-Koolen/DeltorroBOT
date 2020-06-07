const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

    
        message.channel.send("https://www.youtube.com/watch?v=OUGth4axnVM") 

    } catch (error) {
        message.channel.send("Heb een error. probeer later opnieuw.");
    }


}

module.exports.help = {
    name: "demidemi"
}