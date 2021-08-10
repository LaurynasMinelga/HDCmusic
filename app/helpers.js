module.exports = {
    sendMessage(client, message, text) {
        return message.channel.send(`${client.emotes.success} - ${text}`)
            .then(msg => {
                setTimeout(() => {message.delete();}, 2000);
            })
            .catch(e => {
                console.log(e);
            });
    },
    sendError(client, message, text) {
        return message.channel.send(`${client.emotes.error} - ${text}`)
            .then(msg => {
                setTimeout(() => {message.delete();}, 2000);
            })
            .catch(e => {
                console.log(e);
            });
    },
}
