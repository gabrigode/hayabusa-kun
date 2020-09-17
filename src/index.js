const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFile = fs.readdirSync('../src/commands/').filter(file=>file.endsWith('.js'));

for (const file of commandFile){
    const command = require(`./commands/${file}`);
    console.log (`Loaded command${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log ('Ganbare, Hayabusa-kun!');
    console.log(`Logged in as ${client.user.tag}!`);
    console.log ('Bot on!');
    client.user.setActivity("_help", {
        type: "PLAYING",
        //url: ""
      });
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
})

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
})

client.on('message', async message =>{
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ (.*)/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    
    try{
        command.execute(message, args);
    }
    catch(error){
        console.error('ERROR: ' + error);
    }
});

client.login(process.env.BOT_TOKEN);


