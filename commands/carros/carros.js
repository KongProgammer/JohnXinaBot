const Discord = require("discord.js")
const carrro = require("./CarUtil")
/* 
🚗Modelo:
 💰Preço:
*/ 

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
Bem vindo a concessionária 

`)

 message.channel.send(embed);
}