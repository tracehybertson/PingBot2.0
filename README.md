# This is a simple discord bot using discord.js.

I wrote this simple bot to practice my Javascript, OOP, and API calls.
I wanted to practice scanning messages, replying, reacting, using embedded formatting, and button actions in Discord.
The code is modified from the guide found at https://discordjs.guide/ \
\
It looks for messages that start with **???** and then finds the associated command based on file name in the ```\commands``` folder. \
As an example, if a user sends a message **???ping**, the bot will run the command found at ```\commands\ping.js```. \
If a command is not found, the bot returns an error. \
\
Currently, this bot recognizes 4 commands, including a **help** command.\
\
This code runs through discord.js and dotenv with Node.JS\
**You need to set up a .env file with the discord token in the format:** `DISCORD_TOKEN= (your token)`
\
Feel free to use the code, and let me know if you have command suggestions!
