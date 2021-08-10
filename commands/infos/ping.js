module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`)
            .then(msg => {
                setTimeout(() => {msg.delete(); message.delete();}, 10000)
            })
            .catch(e => {
                console.log(e);
            });
    },
};