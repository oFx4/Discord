const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in !`);
});

client.on('message', msg => {
  if (msg.content === '재') {
    msg.delete(); 
    
    msg.channel.sendMessage('test1');
    
  
});

client.login(process.env.TOKEN);
