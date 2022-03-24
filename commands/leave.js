module.exports = {
    run: message => {
        if(message.member.voice.channel){
            message.member.voice.channel.leave(connection => {
                connnection.destroy()
            });
        } else {
            message.channel.send(`${message.author.username}, j'ai quitter le salon vocal.`);
        }
    },
    name: 'leave'
} 