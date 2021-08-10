const validation = require('../../app/validation');
module.exports = {
    name: 'clear',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear',

    execute(client, message) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message) ||
            validation.onlyOneSong(client, message)
        ) {
            return;
        }

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - The queue has just been **removed** !`)
            .then(msg => {
                setTimeout(() => {message.delete();}, 2000);
            })
            .catch(e => {
                console.log(e);
            });
    },
};