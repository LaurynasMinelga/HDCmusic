module.exports = {
    voiceChannelPresence(client, message) {
        if (!message.member.voice.channel) {
            message.channel.send(`${client.emotes.error} - You're not in a voice channel!`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    },
    sameVoiceChannelPresence(client, message) {
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            message.channel.send(`${client.emotes.error} - You are not in the same voice channel!`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    },
    songTitle(client, message, args) {
        if (!args[0]) {
            message.channel.send(`${client.emotes.error} - Please indicate the title of a song!`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    },
    noMusic(client, message) {
        if (!client.player.getQueue(message)) {
            message.channel.send(`${client.emotes.error} - No music currently playing!`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    },
    alreadyPaused(client, message) {
        if (client.player.getQueue(message).paused) {
            message.channel.send(`${client.emotes.error} - The music is already paused!`);
            return true;
        }
        return false;
    },
    alreadyPlaying(client, message) {
        if (!client.player.getQueue(message).paused) {
            message.channel.send(`${client.emotes.error} - The music is already playing!`);
            return true;
        }
        return false;
    },
    onlyOneSong(client, message) {
        if (client.player.getQueue(message).tracks.length <= 1) {
            message.channel.send(`${client.emotes.error} - There is only one song in the queue.`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    },
    invalidRemoveArgs(client, message, args) {
        if (!args.length || isNaN(args[0]) || args[0] === 'Infinity') {
            message.channel.send(`${client.emotes.error} - Please specify track position in queue.`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    },
    invalidVolume(client, message, args) {
        if (!args.length || isNaN(args[0]) || args[0] === 'Infinity' ||
            Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) {
            message.channel.send(`${client.emotes.error} - Please enter a valid number (between 1 and 100).`)
                .then(msg => {
                    setTimeout(() => {msg.delete(); message.delete();}, 2000)
                })
                .catch(e => {
                    console.log(e);
                });
            return true;
        }
        return false;
    }
}
