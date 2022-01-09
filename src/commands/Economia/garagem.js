const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
// items gargemcarro
        let gargemcarro = await db.fetch(message.guild.id);
        if(gargemcarro === null) gargemcarro = " 🚗  |sua garagem esta vazia,  para comprar um carro escreve ;carros  para ver a lista todos os modelos"

        const Embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .addField('Garagem ', gargemcarro)

        message.channel.send(Embed);
}