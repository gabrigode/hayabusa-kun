const riders = require('../rider.js');
const Discord = require('discord.js');

module.exports = {
    name: 'random',
    desc: 'Gets a random Kamen Rider series',
    usage: '_random',
    execute(message, args){
        function randomRider(riders){
            return riders[Math.floor( Math.random() * riders.length )]
        }
        const randomrider = randomRider(riders);
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(randomrider.name)
        .setDescription(randomrider.des)
        .addField('Episodes', randomrider.episodes, true)
        .addField('Year', randomrider.year, true)
        .setThumbnail(randomrider.thumb)
        .setImage(randomrider.thumb)
        .setFooter('Data from MyDramaList');
        message.channel.send(embed);
    },
};
