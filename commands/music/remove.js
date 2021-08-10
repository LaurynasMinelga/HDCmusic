const validation = require('../../app/validation');
module.exports = {
    name: 'remove',
    aliases: ['r'],
    category: 'Music',
    utilisation: '{prefix}remove',

    execute(client, message, args) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message) ||
            validation.onlyOneSong(client, message) ||
            validation.invalidRemoveArgs(client, message, args)
        ) {
            return;
        }

        let track = client.player.remove(message, Number(args[0]));
        if (track) {
            message.channel.send(`${client.emotes.success} - ${track.title} has just been **removed** !`)
                .then(smg => {
                    setTimeout(() => {message.delete();}, 2000);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
};