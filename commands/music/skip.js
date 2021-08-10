const validation = require('../../app/validation');
module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message)
        ) {
            return;
        }
        const success = client.player.skip(message);
        let currentTrack = client.player.nowPlaying(message);

        if (success) {
            message.channel.send(`${client.emotes.success} - ${currentTrack.title} has just been **skipped**!`)
                .then(msg => {
                    setTimeout(() => {message.delete();}, 2000);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
};