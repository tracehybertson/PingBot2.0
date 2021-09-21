// at the top of your file
const { MessageEmbed } = require('discord.js');

module.exports = {
  execute(msg){
    const helpEmbed = new MessageEmbed()
    	.setColor('#e31e10')
    	.setTitle('Get Help with PingBot 2.0')
    	.setAuthor('HelpBot', 'https://cdn.pixabay.com/photo/2017/05/13/09/04/question-2309040_1280.jpg', 'http://www.google.com')
    	.setDescription('So what can this bot do?')
      .addFields(
        { name: 'We have a few commands you can use', value: "Be sure to type a '???' before each key word." },
        { name: '\u200B', value: '\u200B' },
      )
      .addField('Some other commands to try:', 'Try using pong, and see what happens!', true)
    	.setTimestamp()
    	.setFooter('Thanks for playing');

    msg.channel.send({ embeds: [helpEmbed] });
  },
};
