const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {


        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Digite o nome do carro, tipo ;buycar {modelo}')
        let gargemcarro= await db.fetch(message.guild.id, { gargemcarro: [] });
        let amount = await db.fetch(`social_${message.guild.id}_${message.author.id}`)
// items
if(purchase === 'Chevrolet-Astra-2.0-Hatch'){
     
    if(amount < 30000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
    db.subtract(`social_${message.guild.id}_${message.author.id}`, 30000);
    db.push(message.guild.id, "Chevrolet-Astra-2.0-Hatch");
   message.channel.send("parabens voce comprou");


        }
            
      
    }

