//remember client = bot
const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

 

client.login('NDk5MTUwMTE2MDUwMDQyODgw.Dp8J8w.dKDftoIhp6yAbi-BgcE5A2GZbV8');