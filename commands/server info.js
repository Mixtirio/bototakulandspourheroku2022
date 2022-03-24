const Discord = require('discord.js'),
    moment = require('moment')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Information de ce serveur.')
            .setDescription('Les informations du serveur ' + message.guild.name + `\n\n🧑| **${message.guild.memberCount}** Membres.\n🌊| **${message.guild.members.cache.filter(member => !member.user.bot).size}** Humains\n🤖| **${message.guild.members.cache.filter(member => member.user.bot).size}** Bots\n\n🌹| ${message.guild.channels.cache.size} Salons\n🔊| ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} Vocaux\n🔱| ${message.guild.emojis.cache.size}Emoji\n🍜| ` + message.guild.roles.cache.size + ` Emoji\n\nDate de création : ` + moment(message.guild.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), + `Boost ${message.guild.premiumSubscriptionCount}`, + `\n\nPropriétaire ` + message.guild.owner, true)
            .setThumbnail(message.guild.iconURL({dynamic: true})))
    },
    name: 'server-info',
    guildOnly: true
}