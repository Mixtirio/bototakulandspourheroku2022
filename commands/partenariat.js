const Discord = require('discord.js'),
    moment = require('moment')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Nouveau serveur partenaire!')
            .setDescription('🎉| Partenariat effectués !')
            .setThumbnail(message.guild.iconURL({dynamic: true})))
    },
    name: 'partenariat',
    guildOnly: true
}