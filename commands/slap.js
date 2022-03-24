const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner la personne à qui vous voulez lui mettre un claque ! ')
        const imgslap  = ["https://cdn.nekos.life/slap/slap_072.gif",
                      "https://cdn.nekos.life/slap/slap_045.gif",
                      "https://cdn.nekos.life/slap/slap_004.gif",
                      "https://cdn.nekos.life/slap/slap_018.gif",
                      "https://cdn.nekos.life/slap/slap_012.gif",
                      "https://cdn.nekos.life/slap/slap_014.gif",
                      "https://cdn.nekos.life/slap/slap_015.gif",
                      "https://cdn.nekos.life/slap/slap_017.gif",
                      "https://cdn.nekos.life/slap/slap_018.gif",
                      "https://cdn.nekos.life/slap/slap_019.gif",
                      "https://cdn.nekos.life/slap/slap_020.gif",
                      "https://cdn.nekos.life/slap/slap_021.gif",
                      "https://cdn.nekos.life/slap/slap_022.gif",
                      "https://cdn.nekos.life/slap/slap_023.gif",
                      "https://cdn.nekos.life/slap/slap_024.gif",
                      "https://cdn.nekos.life/slap/slap_025.gif",
                      "https://cdn.nekos.life/slap/slap_026.gif",
                      "https://cdn.nekos.life/slap/slap_027.gif",
                      "https://cdn.nekos.life/slap/slap_028.gif",
                      "https://cdn.nekos.life/slap/slap_029.gif",
                      "https://cdn.nekos.life/slap/slap_030.gif",
                      "https://cdn.nekos.life/slap/slap_002.gif",
                      "https://cdn.nekos.life/slap/slap_003.gif",
                      "https://cdn.nekos.life/slap/slap_004.gif",
                      "https://cdn.nekos.life/slap/slap_005.gif",
                      "https://cdn.nekos.life/slap/slap_006.gif",
                      "https://cdn.nekos.life/slap/slap_007.gif",
                      "https://cdn.nekos.life/slap/slap_008.gif",
                      "https://cdn.nekos.life/slap/slap_009.gif",
                      "https://cdn.nekos.life/slap/slap_010.gif",]
        var embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**${message.author}** a mit une claque à ${member} !`)
        .setImage(imgslap[Math.floor(Math.random()*imgslap.length)])

        message.channel.send(embed)
    },
    name: 'slap'
}