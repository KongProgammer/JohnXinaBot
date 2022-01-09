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
 🚗Modelo: Chevrolet Camaro SS
 💰Preço: 140.000
 
🔵 Volkswagen
🚗Modelo:Volkswagen-Jetta-GLI-2021
 💰Preço: 150.000  Creditos sociais
 🚗Modelo: Gol AP 1.8 turbo
 💰Preço: 10.000

⚪️ Nissan  
🚗Modelo:Nissan-Maxima-1991-V6-3.0
💰Preço: 15.000  Creditos sociais
🚗Modelo: Nissan Skyline R34
 💰Preço: 100.000

🟣 Ford 
🚗Modelo:Ford-Mustang-GT-Mach-1
💰Preço: 400.000  Creditos sociais
🚗Modelo:Ford GT 500 
 💰Preço:300.000

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

 🟣Toyota

 🚗Modelo:Toyota Supra MK4
 💰Preço: 85.000


`)

 message.channel.send(embed);
}