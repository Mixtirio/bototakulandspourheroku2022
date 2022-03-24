const Discord = require('discord.js')
const bot = new Discord.Client()
const bdd = require('./bdd.json')
fs = require('fs')
const moment = require('moment')
bot.db = require('./db.json')

prefix = "-"
bot.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        bot.commands.set(command.name, command)
    })
})

bot.on('ready', async () => {
    console.log('Bot En Ligne')
    bot.user.setStatus("online");
    bot.user.setActivity('-help | Mange des ramens.', {type : 'PLAYING'})
})


bot.on('message', async message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    if (!message.member.hasPermission('MANAGE_CHANNELS') && bot.db.lockedChannels.includes(message.channel.id)) return message.delete()
    prefix = "-"
    const args = message.content.trim().split(/ +/g);
    const color = ('#f5e107')
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(prefix)) return
    const command = bot.commands.get(commandName.slice(prefix.length))
    if (!command) return
    command.run(message, args, bot)
})

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}

bot.on("message", async message => {

    if(message.channel.type === "dm"){
        bot.channels.cache.get('956554111002771506').send("Message envoyer : " + message.content + "\n\n Message de: @" + message.author.username)
    }
})

bot.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === '🔒・Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })
    const everyoneRole = channel.guild.roles.cache.find(role => role.name === 'everyone')
    if (!everyoneRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: true,
        ADD_REACTIONS: true
    })
})

bot.login(process.env.token)