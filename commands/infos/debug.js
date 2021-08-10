module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`)
            .then(msg => {
                setTimeout(() => {msg.delete(); message.delete();}, 5000)
            })
            .catch(e => {
                console.log(e);
            });
    },
};