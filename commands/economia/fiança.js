const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  
    let user = message.mentions.members.first() 

    let member = db.fetch(`social_${message.guild.id}_${message.author.id}`)

    let embed1 = new Discord.MessageEmbed()
    .setColor("#000001")
    .setDescription(`para saber o valor para pagar aqui em baixo esta a lista 
    
    comando para pagar:

    ;fiança @pessoa {valor}

   contador:

🔸 se ele errou 0 a 100
💰 2.000 creditos sociais

🔸se ele errou entre 100 a 230

💰 10.000 creditos sociais

🔸se ele errou entre 230 a 350

💰35.000 creditos sociais

🔸se ele errou 350 a 560

    💰450,000 creditos sociais 

🔸se ele errou entre 560 a 800

💰1.000.000 creditos sociais

🔸se ele errou entre 800 a 1200

❌inafiançável

 quebra as regra:
    
🔸preconceito 

45.000 creditos socais (dependendo do  nivel o valor pode ser alto)

🔸intolerância religiosa 

💰85.000 a 900.000  creditos sociais

🔸spam ou flood

💰70.000 a 400.000 creditos sociais 

🔸apologia ao nazismo

❌ inafiançável 

    `);

    if (!user) {
        return message.channel.send(`${message.author}`, embed1)
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("#000001")
    .setDescription(` Caralho mano colocar o valor para pagar  :rage: `);
  
    if (!args[1]) {
        return message.channel.send(`${message.author}`, embed2)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#000001")
    .setDescription(`voce nao tem creditos socais  suficiente para pagar o cara POBRE!`);

    if (member < args[1]) {
        return message.channel.send(`${message.author}`, embed4)
    }
    let embed5 = new Discord.MessageEmbed()
    .setColor("#000001")
    .setDescription(` Meu amigo tu nao pode enviar o valor menor de 0 tem que ser maior que 0 demente`);

    if(args[1] < 0) {
        return message.channel.send(`${message.author}`, embed5)
    }
    let embed7 = new Discord.MessageEmbed()
    .setColor("#000001")
    .setDescription(`PÓHA TU E BURRO MANO! colocar o valor em NUMERICO!!! tnc`);

    if (isNaN(args[1])){
        return message.channel.send(`${message.author}`, embed7)
    }
    let embed6 = new Discord.MessageEmbed()
    .setTitle("Parabens voce pagou a fiança dele ")
    .setColor("#000001")
    .setDescription(`Você pagou o ${args[1]} para  libertar ${user} do gulag`);

    message.channel.send(`${message.author}`, embed6)

    db.subtract(`social_${message.guild.id}_${message.author.id}`, args[1])
}