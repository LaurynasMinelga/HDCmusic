module.exports = {
    name: 'clear',
    description: 'clear all the music in the queue',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music bruh ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `No music in the queue bruh ${inter.member}... try again ? ❌`, ephemeral: true });

        await queue.clear();

        inter.reply(`The queue has just been cleared bruh 🗑️`);
    },
};