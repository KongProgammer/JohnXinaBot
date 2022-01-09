const Discord = require("discord.js")


exports.run = (client, message, args) => {

let pau = [1,2,4,5,6]

var GhostEhGay = pau[Math.floor(Math.random() * pau.length)];
var Saulogay  = pau[Math.floor(Math.random() * pau.length)];
var tayssogay = pau[Math.floor(Math.random() * pau.length)];


const caralho = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`

🍀Resultado dos numeros: 

${GhostEhGay}-${Saulogay}-${tayssogay}

Parabens Para os ganhadores 🥰
 
`)

message.channel.send(caralho)


}