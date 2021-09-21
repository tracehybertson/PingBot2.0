// at the top of your file
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  execute(msg) {
    const yayEmbed = new MessageEmbed()
      .setColor('#e31e10')
      .setTitle('You are awesome! Have a puppy!')
      .setAuthor('PupperBot', 'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg', '')
      .setImage('https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg')
      .setTimestamp()
      .setFooter('Thanks for playing');

    msg.channel.send({
      embeds: [yayEmbed]
    });
  },
};
