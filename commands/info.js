const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    run: async (message, args) => {
        if(message.mentions.users.first()) {
            user = message.mentions.users.first();
       } else{
            user = message.author;
        }
        const member = message.guild.member(user);

        const embed = new Discord.MessageEmbed() 
        .setColor('#329da8')
        .setTitle(`Information de ${user.username}.`)
        .setDescription(`Information de **${user.username}**\n\n🎆| ID ${user.id}\n🎭| Pseudo du Serveur: ${member.nickname ? member.nickname : 'Aucun'}\n\n📩| Création du Compte: ${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n📨| Rejoint le serveur le: ${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}\n\n📌| Rôles:\n\n ` + member.roles.cache.filter(r => r.id !== message.guild.id).sort((A,B) => B.rawPosition - A.rawPosition).map(x => `${x}`).splice(0,50).join(',\n '))
        .setThumbnail(user.avatarURL)
    message.channel.send(embed)
    },
    name: 'info'
}