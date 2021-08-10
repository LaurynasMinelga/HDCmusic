const validation = require('../../app/validation');
module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message)
        ) {
            return;
        }

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return this.send(message, client, 'Repeat mode **disabled**!');
            } else {
                client.player.setLoopMode(message, true);
                return this.send(message, client, 'Repeat mode **enabled** the whole queue will be repeated endlessly!')
            }
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return this.send(message, client, 'Repeat mode **disabled**!')
            } else {
                client.player.setRepeatMode(message, true);
                return this.send(message, client, 'Repeat mode **enabled** the current music will be repeated endlessly!')
            }
        }
    },
    send(message, client, text) {
        return message.channel.send(`${client.emotes.success} - ${text}`)
            .then(msg => {
                setTimeout(() => {message.delete();}, 2000);
            })
            .catch(e => {
                console.log(e);
            });
    }
};