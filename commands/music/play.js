const validation = require('../../app/validation');
module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.songTitle(client, message, args)
        ) {
            return;
        }

        client.player.play(message, args.join(" "), { firstResult: true })
            .then(msg => {
                setTimeout(() => {message.delete();}, 2000);
            })
            .catch(e => {
                console.log(e);
            });
    },
};