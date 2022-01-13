const Discord = require("discord.js");
 
 
   exports.run = async (bot, message, args) => {
 
var list = [
'http://images.uncyc.org/pt/0/0f/Palito_tarado.gif','https://media.tenor.com/images/d01507ea5cd2f4222bc126ccdf95a8de/tenor.gif',
'https://media.tenor.com/images/94e01ee6a18a39e5e4ff54a384124069/tenor.gif','https://cdn.discordapp.com/attachments/820727554108686387/929374630194598008/20220108_105943.gif'
];
 
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('🔸 | ola, para usar esse comando so seguir esse exemplo `;foder @pessoa`');
}
 
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('😏DEU A BUNDA😏')
        .setColor('#070073')
        .setDescription(`🔸${message.author} ta comendo a bunda ${user}🔸`)
        .setImage(rand)
        .setFooter('DEU A BUNDA COM VONDADE')
  await message.channel.send(embed);
}