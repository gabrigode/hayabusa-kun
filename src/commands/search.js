const riders = require('../rider.js');
const Discord = require('discord.js');

module.exports = {
    name: 'search',
    desc: 'Search for a specific Kamen Rider series on database',
    usage: '_search <Rider keyword>',
    execute(message, args){
        if (!args.length){return message.reply('no search name provided!')}
        function getRider(riders){
            return riders.find(obj => obj.key_word == args[0])
        }
        try{
            const getrider = getRider(riders);
            if (args[0] === getrider.key_word){
                const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(getrider.name)
                .setDescription(getrider.des)
                .addField('Episodes', getrider.episodes, true)
                .addField('Year', getrider.year, true)
                .setThumbnail(getrider.thumb)
                .setImage(getrider.thumb)
                .setFooter('Data from MyDramaList');
                message.channel.send(embed);
            }
        }
        catch(error){
            message.channel.send('No rider found!')
        }
    },
};
