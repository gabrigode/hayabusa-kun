const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'help',
    desc: 'All avaliable commands',
    usage: '_help',
    execute(message, args){
        const commandFile = fs.readdirSync('../src/commands/').filter(file=>file.endsWith('.js'));
        let result = commandFile.forEach((f,i) =>{
            let props = require(`./${f}`)
            namelist = (props.name);
            usage = (props.usage)
            desclist = (props.desc);
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addField('Command:', namelist, false)
            .addField('Usage:', usage, false)
            .addField('Description:', desclist, false)
            message.author.send(embed);
        })
        message.channel.send ('All avaliable commands sended to your DM!')
    }

};
