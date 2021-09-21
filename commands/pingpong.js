module.exports = {
  execute(msg) {
    msg.react('❗');
    msg.reply('Wow! That was clever of you.');
    msg.channel.send('Ping Pong Ping Pong');
  },
};
