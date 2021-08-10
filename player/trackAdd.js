module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'BLACK',
            title: track.title,
            author: {
                name: 'Added to queue',
                icon_url: message.author.avatarURL(),
                url: track.url,
            },
            thumbnail: {
                url: track.thumbnail,
            },
            fields: [
                {
                    name: 'Song duration',
                    value: track.duration,
                    inline: true,
                },
                {
                    name: 'Time until playing',
                    value: '-',
                    inline: true,
                },
                {
                    name: 'Position in queue',
                    value: queue.tracks.length-1,
                },
            ],
            footer: { text: 'Made by Waswas\'as with love <3' },
            timestamp: new Date(),
            },
        });
};