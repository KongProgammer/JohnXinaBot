const Discord = require("discord.js")


exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
🔸criador: Stalin 
🔸Linguagem Bot: JavaScript
🔸aniversário: 1 de março 15h
🔸funçoes: economia,diversao,adm
🔸versao: 0.65.1 {BETA}

🔸Codico fonte: https://github.com/KongProgammer/JohnXinaBot
`)

 message.channel.send(embed);
}