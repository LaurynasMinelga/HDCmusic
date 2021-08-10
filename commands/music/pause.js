const validation = require('../../app/validation');
module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message) ||
            validation.alreadyPaused(client, message)
        ) {
            return;
        }
        const success = client.player.pause(message);

        if (success) {
            message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused!`)
                .then(msg => {
                    setTimeout(() => {message.delete();}, 2000);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
};