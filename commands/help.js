const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        var embed = new Discord.MessageEmbed()
        .setColor('#f1ff70')
        .setTitle('💫| Listes des commandes')
        .setDescription('**⚔️| Modération :**\n`ban`,`kick`,`mute`,`unmute`,`tempmute`,`tempban`,`warn`,`unwarn`,`lock`,`unlock0`\n\n**🌼| Information :**\n`info`,`server-info`,`pp`\n\n**🎉| Fun :**\n`kiss`,`hug`,\n\n**🎵| Musiques :**\n`play`,`leave`')

        message.channel.send(embed)
    },
    name: 'help'
}