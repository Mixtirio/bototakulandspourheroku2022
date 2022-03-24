const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner la personne avec laquel vous voulez faire un calin ! ')
        const imghug  = ["https://cdn.nekos.life/hug/hug_072.gif",
                      "https://cdn.nekos.life/hug/hug_045.gif",
                      "https://cdn.nekos.life/hug/hug_004.gif",
                      "https://cdn.nekos.life/hug/hug_018.gif",
                      "https://cdn.nekos.life/hug/hug_012.gif",
                      "https://cdn.nekos.life/hug/hug_014.gif",
                      "https://cdn.nekos.life/hug/hug_015.gif",
                      "https://cdn.nekos.life/hug/hug_017.gif",
                      "https://cdn.nekos.life/hug/hug_018.gif",
                      "https://cdn.nekos.life/hug/hug_019.gif",
                      "https://cdn.nekos.life/hug/hug_020.gif",
                      "https://cdn.nekos.life/hug/hug_021.gif",
                      "https://cdn.nekos.life/hug/hug_022.gif",
                      "https://cdn.nekos.life/hug/hug_023.gif",
                      "https://cdn.nekos.life/hug/hug_024.gif",
                      "https://cdn.nekos.life/hug/hug_025.gif",
                      "https://cdn.nekos.life/hug/hug_026.gif",
                      "https://cdn.nekos.life/hug/hug_027.gif",
                      "https://cdn.nekos.life/hug/hug_028.gif",
                      "https://cdn.nekos.life/hug/hug_029.gif",
                      "https://cdn.nekos.life/hug/hug_030.gif",
                      "https://cdn.nekos.life/hug/hug_002.gif",
                      "https://cdn.nekos.life/hug/hug_003.gif",
                      "https://cdn.nekos.life/hug/hug_004.gif",
                      "https://cdn.nekos.life/hug/hug_005.gif",
                      "https://cdn.nekos.life/hug/hug_006.gif",
                      "https://cdn.nekos.life/hug/hug_007.gif",
                      "https://cdn.nekos.life/hug/hug_008.gif",
                      "https://cdn.nekos.life/hug/hug_009.gif",
                      "https://cdn.nekos.life/hug/hug_010.gif",
                      "https://cdn.nekos.life/hug/hug_031.gif",]
        var embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**${message.author}** a fait un calin à ${member} !`)
        .setImage(imghug[Math.floor(Math.random()*imghug.length)])

        message.channel.send(embed)
    },
    name: 'hug'
}