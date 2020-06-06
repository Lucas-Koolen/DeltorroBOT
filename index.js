const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();


//---------------------------
//lezen van losse commands
//---------------------------
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Bro, kan deze files niet vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`)
        console.log(`De enge file ${f} is aanwezig`);

        bot.commands.set(fileGet.help.name, fileGet);

    })
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("-> !help <-", { type: "PLAYING"});

});


bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.tag + ' has joined the server!');

    var Newjoin = member.guild.channels.find(`name`, "welkom")
    
    var NewDel = ("Hallo " + member.user + ", welkom bij de server van de LBJ_Clan!");

    Newjoin.send(NewDel);

    return;
  });



bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);

///kick command
    if(command === `${prefix}kick`) {


        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if(!kickUser) return message.channel.send("Gebruiker bestaat niet");

        var reason = arguments.join(" ").slice(22);

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bro, je kunt dit command niet gebuiken");

        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Waarom wil je een admin kicken??");

        var kick = new discord.RichEmbed()
            .setDescription("Kick")
            .setColor("#752a2a")
            .addField("Kicked gebruiker", kickUser)
            .addField("Gekickd door", message.author)
            .addField("Reden", reason);


        var kickChannel = message.guild.channels.find(`name`, "staff");
        if(!kickChannel) return message.guild.send("Kan het kanaal niet vinden");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;

    }
});


bot.login(process.env.token);