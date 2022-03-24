const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports = {
    run: message => {
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");

                if(!args[1]){
                    message.reply("Liens de la vidéo non mentionné");
                    connection.disconnect
                }
                else {
                
                let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio"}));

                dispatcher.on("finish", () => {
                    message.reply('Je joue actuellement la musique.')
                    dispatcher.destroy();
                });

                dispatcher.on("error", err => {
                    console.log("Erreur de dispatcher : " + err);
                });
            }
            }).catch(err => {
                message.reply("Erreur lors de la connextion : " + err);
            });
        }
        else {
            message.reply("Vous n'êtes pas connecté en vocal.");
        }
    },
    name: 'play',
    aliases: ['p'],
}