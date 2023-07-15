const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    /*if (message.author.id === '308653237211234317')
      message.reply('Cheese said something');*/
    console.log(message.content);
  },
};
