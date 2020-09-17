const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: 'wikia',
    desc: 'Search for a information on Wikia',
    usage: '_wikia <search info>',
    execute(message, args){
        if (!args.length){return message.reply('no search name provided!')}
        const api=(`https://kamenrider.fandom.com/api/v1/Search/List?query=${args[0]}&type=default&limit=1&minArticleQuality=10&batch=1&namespaces=0%2C14`)
        fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            let id =''
            try{
                id = result.items[0].id
            }
            catch (error){
                message.channel.send('No entries found!')
            }
            let api = (`https://kamenrider.fandom.com/api/v1/Articles/AsSimpleJson?id=${id}`)
            fetch (api)
            .then(function(response){
                return response.json();
            })
            .then(function(result){
                let image =''
                try{
                    image = (result.sections[0].images[0].src)
                }
                catch(error){}
                const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(result.sections[0].title)
                .setDescription(result.sections[0].content[0].text)
                .setImage(image)
                .setFooter('Data from Wikia');
                message.channel.send(embed);
            })
        })
        console.log()
    },
};
