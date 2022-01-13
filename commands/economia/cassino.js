const Discord = require("discord.js");
 const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (bot, message, args) => {


    const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"]; 

    let user = message.author;
    let moneydb = await db.fetch(`social_${message.guild.id}_${user.id}`)
    let Social = parseInt(args[0]);
    let win = false;
    let moneymore = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Você não tem tudo isso`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Coloque um valor`);
// money
    if (!Social) return message.channel.send(moneyhelp);
    if (Social > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        Social  *= 2
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        Social  *= 5
        win = false;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nVocê ganhou ${Social} 💵`)
            .setColor("#000001")
        message.channel.send(slotsEmbed1)
        db.add(`social_${message.guild.id}_${user.id}`, Social)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nvocê perdeu ${Social} 💵`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed)
        db.subtract(`social_${message.guild.id}_${user.id}`, Social)


        
    }
}


