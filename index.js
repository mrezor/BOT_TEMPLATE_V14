const { Client, Collection, IntentsBitField } = require('discord.js');

const bot = new Client({ 
    intents: new IntentsBitField(3276799)
});

bot.config = require('./config');
bot.commands = new Collection()

require('./src/Structure//Handler/Event')(bot);
require('./src/Structure//Handler/Command')(bot);

bot.login(bot.config.clients.token);