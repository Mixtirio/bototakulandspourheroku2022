const Discord = require('discord.js')
const fs = require('fs')
 
module.exports = {
    run: async (message, args, bot) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à warn.')
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas warn le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas warn ce membre.')
        const reason = args.slice(1).join(' ')
        if (!reason) return message.channel.send('Veuillez indiquer une raison.')
        if (!bot.db.warns[member.id]) bot.db.warns[member.id] = []
        bot.db.warns[member.id].unshift({
            reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./db.json', JSON.stringify(bot.db))
        var embed = new Discord.MessageEmbed()
        .setTitle('Avertissement')
        .setColor('#f5e107')
        .setDescription(`Le membre **${member}** a été sanctionné,\n\nIl/elle a été sanctionné par: **${message.author}**\n\nPour la Raison: ${reason}\n\n${member} à désormais **${db.warns[member.id]}**`)
        .addField(`Yukuro`, ` | ${guild.name}`)

        message.channel.send(embed)
    },
    name: 'warn',
    guildOnly: true
}
 