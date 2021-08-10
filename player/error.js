const helpers = require('../app/helpers');
module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            helpers.sendError(client, message, 'There is no music being played on this server.');
            break;
        case 'NotConnected':
            helpers.sendError(client, message, 'You are not connected in any voice channel.');
            break;
        case 'UnableToJoin':
            helpers.sendError(client, message, 'I am not able to join your voice channel, please check my permissions.');
            break;
        case 'VideoUnavailable':
            helpers.sendError(client, message, `${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            helpers.sendError(client, message, 'The music is starting... please wait and retry!');
            break;
        default:
            helpers.sendError(client, message, `${client.emotes.error} - Shit happens : ${error}`);
    }
};
