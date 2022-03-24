const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner la personne à embrasser ! ')
        const imgkiss  = ["https://cdn.nekos.life/kiss/kiss_072.gif",
                      "https://cdn.nekos.life/kiss/kiss_045.gif",
                      "https://cdn.nekos.life/kiss/kiss_004.gif",
                      "https://cdn.nekos.life/kiss/kiss_018.gif",
                      "https://cdn.nekos.life/kiss/kiss_012.gif",
                      "https://cdn.nekos.life/kiss/kiss_014.gif",
                      "https://cdn.nekos.life/kiss/kiss_015.gif",
                      "https://cdn.nekos.life/kiss/kiss_017.gif",
                      "https://cdn.nekos.life/kiss/kiss_018.gif",
                      "https://cdn.nekos.life/kiss/kiss_019.gif",
                      "https://cdn.nekos.life/kiss/kiss_020.gif",
                      "https://cdn.nekos.life/kiss/kiss_021.gif",
                      "https://cdn.nekos.life/kiss/kiss_022.gif",
                      "https://cdn.nekos.life/kiss/kiss_023.gif",
                      "https://cdn.nekos.life/kiss/kiss_024.gif",
                      "https://cdn.nekos.life/kiss/kiss_025.gif",
                      "https://cdn.nekos.life/kiss/kiss_026.gif",
                      "https://cdn.nekos.life/kiss/kiss_027.gif",
                      "https://cdn.nekos.life/kiss/kiss_028.gif",
                      "https://cdn.nekos.life/kiss/kiss_029.gif",
                      "https://cdn.nekos.life/kiss/kiss_030.gif",
                      "https://cdn.nekos.life/kiss/kiss_002.gif",
                      "https://cdn.nekos.life/kiss/kiss_003.gif",
                      "https://cdn.nekos.life/kiss/kiss_004.gif",
                      "https://cdn.nekos.life/kiss/kiss_005.gif",
                      "https://cdn.nekos.life/kiss/kiss_006.gif",
                      "https://cdn.nekos.life/kiss/kiss_007.gif",
                      "https://cdn.nekos.life/kiss/kiss_008.gif",
                      "https://cdn.nekos.life/kiss/kiss_009.gif",
                      "https://cdn.nekos.life/kiss/kiss_010.gif",
                      "https://cdn.nekos.life/kiss/kiss_031.gif",]
        var embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**${message.author}** a embrassé ${member} !`)
        .setImage(imgkiss[Math.floor(Math.random()*imgkiss.length)])

        message.channel.send(embed)
    },
    name: 'kiss'
}