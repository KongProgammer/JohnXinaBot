const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

      let user = bot.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author;

    let social = db.fetch(`social_${message.guild.id}_${user.id}`)
    if(social === null) social = 0;

    let imposto = db.fetch(`imposto_${message.guild.id}_${user.id}`)
    if(imposto === null) imposto = 0;
  
   

    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("♦️ Social-credit ")
    .setDescription(`Bem vindo ${user.username}

   💰 Social Credit: 
   ${social} 

   🔸 Total de imposto:
   ${imposto}
    `)


    message.channel.send(`${user}`, embed);
}
