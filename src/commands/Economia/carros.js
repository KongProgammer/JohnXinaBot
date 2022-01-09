const Discord = require("discord.js")

/* 
🚗Modelo:
 💰Preço:
*/ 

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
Bem vindo a concessionária de carros


 🟡 Chevrolet

🚗Modelo:Chevrolet-Astra-2.0-Hatch
 💰Preço: 30.000 Creditos sociais

🔵 Volkswagen
🚗Modelo:Volkswagen-Jetta-GLI-2021
 💰Preço: 150.000  Creditos sociais

⚪️ Nissan  
🚗Modelo:Nissan-Maxima-1991-V6-3.0
💰Preço: 15.000  Creditos sociais

🟣 Ford 
🚗Modelo:Ford-Mustang-GT-Mach-1
💰Preço: 400.000  Creditos sociais

🟠Ferrai
🚗Modelo:Ferrari-488-pista
💰Preço: 1.000.000  Creditos sociais

🔴 Bugatti
🚗Modelo: Bugatti-Chiron
 💰Preço: 18.000.000
🚗Modelo: Bugatti-La-Voiture
 💰Preço: 45.000.000

🟥  fiat
🚗Modelo: Fiat-Uno-Mille-1.6-turbo
 💰Preço:15.000
🚗Modelo: Fiat Marea 2.4 turbo
 💰Preço: 18.000


`)

 message.channel.send(embed);
}