const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

        message.channel.send("Vigo's mental state:", {files: ["./afbeeldingen/vigo-high.png"]})

    } catch (error) {
        message.channel.send("Heb een error. probeer later opnieuw.");
    }
 

}

module.exports.help = {
    name: "high"
}