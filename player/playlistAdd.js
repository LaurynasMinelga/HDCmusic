module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'BLACK',
            title: playlist.title,
            author: {
                name: 'Playlist added to queue',
                icon_url: message.author.avatarURL(),
                url: playlist.url,
            },
            thumbnail: {
                url: playlist.thumbnail,
            },
            fields: [
                {
                    name: 'Time until playing',
                    value: '-',
                    inline: true,
                },
                {
                    name: 'Enqueued',
                    value: playlist.tracks.length-1,
                    inline: true,
                },
            ],
            footer: { text: 'Made by Waswas\'as with love <3' },
            timestamp: new Date(),
        },
    });
};