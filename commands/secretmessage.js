// at the top of your file
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  execute(msg){
    const row = new MessageActionRow()
      .addComponents(
          new MessageButton()
            .setLabel('Click Me!')
            .setStyle('LINK')
            .setURL('https://twitter.com'),
      );
      msg.react('🤐');
      msg.channel.send({ content: 'Good Job! You found me!', components: [row] });
  },
};
