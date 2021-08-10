const validation = require('../../app/validation');
module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (
            validation.voiceChannelPresence(client, message) ||
            validation.sameVoiceChannelPresence(client, message) ||
            validation.noMusic(client, message)
        ) {
            return;
        }
        const queue = client.player.getQueue(message);

        message.channel.send(
            `**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : 
            ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
            (queue.tracks.map((track, i) => {
                if (i === 0) {
                    return '';
                }
                return `**#${i}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
            })
                .slice(0, 5)
                .join('\n') +
                `\n\n${queue.tracks.length > 5 ? 
                    `And **${queue.tracks.length - 5}** other songs...\n` : 
                    `In the playlist **${queue.tracks.length-1}** song(s)...\n`}`));
    },
};