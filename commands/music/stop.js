const validation = require('../../app/validation');
module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message)
        ) {
            return;
        }
        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) {
            message.channel.send(`${client.emotes.success} - See ya bois, music out.`)
                .then(msg => {
                    setTimeout(() => {message.delete();}, 2000);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            message.delete();
        }
    },
};