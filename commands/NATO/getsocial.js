const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {    
  
  if(!["721797230981545994","714620771854581794","850456757137571862","555091245966426130", "814835259958100009"].includes(message.author.id))
    return message.channel.send(` ${message.author} somente a NATO pode usar esse comando `)
    
    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };

    db.add(`social_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`social_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle("Credit social adiocinado ")
    .setColor("#000001")
    .setDescription(`Foi adicionado ${args[1]} credit social para ${user}  Credit Atual: ${bal}`)
    .setImage("https://cdn.discordapp.com/attachments/820727554108686387/922203725320318996/getsocial.png")
    message.channel.send(moneyEmbed);
}