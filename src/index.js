require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const readCommands = require('./readCommands.js');
const readEvents = require('./readEvents.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.cooldowns = new Collection();

readCommands(client);

readEvents(client);

client.login(process.env.TOKEN);
