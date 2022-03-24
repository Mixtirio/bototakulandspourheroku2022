const Discord = require("discord.js")

module.exports = {
    run: (message, args, client) => {
        const avatar = message.mentions.members.first() !== undefined ? message.mentions.members.first().user : message.author
        var embedmention = new Discord.MessageEmbed()
        .setTitle(`Voici la photo de ${avatar.username}`)
        .setImage(avatar.displayAvatarURL({dynamic: true, size: 512}))

        message.channel.send(embedmention)
    },
    name: 'pp',
    guildOnly: true
}