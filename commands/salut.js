const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{
        message.channel.send(":flag_um: https://www.youtube.com/watch?v=opiMHTaUEaA :flag_um:", {files: ["./afbeeldingen/salute.png"]})

    } catch (error) {
        message.channel.send("Heb een error. probeer later opnieuw.");
    }
 
}

module.exports.help = {
    name: "salute"
}