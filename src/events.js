const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Shit happens: ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Useless admins, no connection: ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Started playing ${track.title} in ${queue.connection.channel.name} 🎧`, iconURL: track.requestedBy.avatarURL()})
    .setColor('#13f857')

    const back = new ButtonBuilder()
    .setLabel('Back')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Skip')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Resume & Pause')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Queue')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send({
        embed: {
            color: 'BLACK',
            title: track.title,
            author: {
                name: 'Added to queue',
                icon_url: track.requestedBy.avatarURL(),
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
            footer: { text: 'Stolen by Waswas\'as with love <3' },
            timestamp: new Date(),
        },
    });
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('No me, no music and me just left');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('No one cares to listen, bye');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Add more music, b***h, ima out.');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`All the songs in playlist added into the queue ✅`);
});