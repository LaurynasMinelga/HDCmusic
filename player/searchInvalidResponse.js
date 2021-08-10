module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - The selection has been **cancelled**.`)
            .then(msg => {
                setTimeout(() => { msg.delete(); message.delete(); }, 3000);
            })
            .catch(e => {
                console.log(e);
            });
    } else {
        message.channel.send(`${client.emotes.error} - You must send a valid number between **1** and **${tracks.length}** !`)
            .then(msg => {
                setTimeout(() => { msg.delete(); message.delete(); }, 3000);
            })
            .catch(e => {
                console.log(e);
            });;
    }
};