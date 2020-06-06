const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

        var text = "**__Deltorro Bot__** \n\n __Hoofd Commands__ \n !info - krijg info over de bot \n !stats - krijg info over de server \n !kick - kick een persoon (staff only) \n \n __Commands__  \n !hallo - krijg een bericht van de bot. \n !Joe - Ja, wie is dat?  \n !mango - ma main goal  \n !N-word - krijg een n-word pass  \n !riet - rishard meme \n !salute - :man_raising_hand: :flag_um: \n\n __Social__ \n Youtube - https://www.youtube.com/channel/UCVQMgmu_dc6f-FmnB4I3w3Q \n Twitch - https://www.twitch.tv/lbj_deltorro";

        message.author.send(text);

        message.channel.send("Alles is gestuurd in een DM bericht.")

    } catch (error) {
        message.channel.send("Heb een error. probeer later opnieuw.");
    }
 

}

module.exports.help = {
    name: "help"
}











