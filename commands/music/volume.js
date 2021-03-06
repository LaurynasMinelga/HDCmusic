const validation = require('../../app/validation');
module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message) ||
            validation.invalidVolume(client, message, args)
        ) {
            return;
        }
        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) {
            message.channel.send(`${client.emotes.success} - Volume set to **${parseInt(args[0])}%**.`)
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