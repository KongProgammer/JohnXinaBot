const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
    
 if(!["721797230981545994","555091245966426130","850456757137571862","714620771854581794","814835259958100009"].includes(message.author.id))
    return message.lineReply(` ${message.author} Apenas meu criador tem permissão de utilizar este comando!`)

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para remover o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };

    db.subtract(`social_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`social_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle("social credit ")
    .setColor("#00001")
    .setDescription(`Foi removido  ${args[1]} credit social  para ${user}! dia da execuçao: 十二月一日`)
    .setImage("https://cdn.discordapp.com/attachments/820727554108686387/922206013875159060/unknown.png")

    message.channel.send(moneyEmbed);
}