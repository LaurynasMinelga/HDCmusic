const validation = require('../../app/validation');
module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message) ||
            validation.alreadyPlaying(client, message)
        ) {
            return;
        }
        const success = client.player.resume(message);

        if (success) {
            message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed!`)
                .then(msg => {
                    setTimeout(() => {message.delete();}, 2000);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
};