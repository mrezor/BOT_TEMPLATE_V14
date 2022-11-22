const { ActivityType } = require('discord.js');
const config = require('../../config');


module.exports = {
    name: 'ready',
    execute(client) {
        console.log('\x1b[33m' + `Connectés à ${client.user.username} !\n` + '\x1b[33m' + `-> Le bot est utilisé sur ${client.guilds.cache.size} serveurs !`);

        client.user.setPresence({
            activities: [{ name: config.clients.activity, type: ActivityType.Watching }],
            status: 'dnd',
          });
    }
}