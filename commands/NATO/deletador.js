const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  if(!["721797230981545994","714620771854581794","850456757137571862","555091245966426130", "814835259958100009"].includes(message.author.id))
    return message.lineReply(` ${message.author} Apenas meu criador tem permissão de utilizar este comando!`)
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar a pessoa para deletar os dados `);
    };

 db.delete(`social_${message.guild.id}_${user.id}`);
 db.delete(`imposto_${message.guild.id}_${user.id}`)
db.delete(message.author.id,{gargemcarro: [] });

let embed1 = new Discord.MessageEmbed()
    .setColor("#000001")
    .setDescription(`Sucesso! `);


message.channel.send(embed1) 



}




