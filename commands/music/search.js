const validation = require('../../app/validation');
module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.songTitle(client, message, args)
        ) {
            return;
        }

        client.player.play(message, args.join(" "))
            .then(msg => {
                setTimeout(() => {message.delete();}, 2000);
            })
            .catch(e => {
                console.log(e);
            });;
    },
};