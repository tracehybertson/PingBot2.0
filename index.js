// Run dotenv
require('dotenv').config();

//Import Libraries, define constants
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
//const { MessageActionRow, MessageButton } = require('discord.js');

// Set up client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//Ready Commands in a collection based on filename
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  let commandName = file.split(".")[0];
  client.commands.set(commandName, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// Set command prefix
let prefix = '%';

// When we get sent a message, if it starts with the prefix, check if it's a command
client.on('messageCreate', msg => {

	if (!msg.content.startsWith(prefix)) return;

  let restOfMessage = msg.content.split(prefix).pop();
  //console.log('Here is our rest of message: ' + restOfMessage);
	const command = client.commands.get(restOfMessage);

	if (!command){
    return msg.reply({ content: "Sorry, that is not a valid command! " +
    "Please type'" + prefix +"help' to get a list of commands and their actions.", ephemeral: true });
  }

	try {
		command.execute(msg);
	} catch (error) {
		console.error(error);
		return msg.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//Login to the discord
client.login(process.env.DISCORD_TOKEN);
