const Discord = require('discord.js');
const fs = require('fs');
const riders = require('../rider.js');

module.exports = {
    name: 'listrider',
    desc: 'All avaliable Riders and their keywords',
    usage: '_listrider',
    execute(message, args){
        let valuesArray = Object.values(riders); 
        let name = []
        let key = []
        for (let value of valuesArray) { 
            console.log(value.name); 
            name.push(value.name)
            console.log(value.key_word)
            key.push(value.key_word)
      } 
      const embed = new Discord.MessageEmbed()
      .setTitle('KAMEN RIDER LIST')
      .addField('Name:', name, true)
      .addField('Keyword:', key, true)
      message.channel.send(embed)
    }
};