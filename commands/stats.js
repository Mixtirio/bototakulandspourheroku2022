const Discord = require('discord.js')
 
module.exports = {
    run: async (message, args) => {
        let onlines = message.guild.members.cache.filter(({
            presence
        }) => presence.status !== 'offline').size;
        let totalmembers = message.guild.members.cache.size;
        let totalservers = bot.guilds.cache.size;
        let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
        let total_news = message.guild.roles.cache.get('ID_ROLE_DES_NOUVEAUX_MEMBRES').members.size;

        const EmbedStats = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Statistiques')
            .setURL('https://discord.js.org/')
            .setAuthor('Mon Bot discord', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Voici les statistiques du serveur')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields({
                name: 'Nombre de membrs total',
                value: totalmembers,
                inline: true
            }, {
                name: 'Membres connéctés : ',
                value: onlines,
                inline: true
            }, {
                name: 'Nombre de serveurs auquel le bot appartient : ',
                value: totalservers,
                inline: true
            }, {
                name: 'Nombres de bots sur le serveur : ',
                value: totalbots,
                inline: true
            }, {
                name: 'Nombre d\'arrivants : ',
                value: total_news,
                inline: true
            }, )
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(EmbedStats);
    },
    name: 'stats',
    guildOnly: true
}