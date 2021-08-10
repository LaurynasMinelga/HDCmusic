module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - No results found for ${query} !`)
        .then(msg => {
            setTimeout(() => { msg.delete(); }, 3000);
        })
        .catch(e => {
            console.log(e);
        });
};