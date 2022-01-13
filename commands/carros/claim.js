const Discord = require("discord.js");
 const db = require('quick.db');
const ms = require('parse-ms');
 
   exports.run = async (bot, message, args) => {
 
 let user = message.author;
        let timeout = 3600000;
        let author = await db.fetch(`cardsoo_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(` ❌ | você ja usou esse comando recentemente  volte em  ${time.hours} hora(s), ${time.minutes} minutos`)
        } else {

var list = [
'https://cdn.discordapp.com/attachments/929437812980330526/930102218512797766/PicsArt_01-10-10.28.07.png','https://cdn.discordapp.com/attachments/929437812980330526/930102218152095765/PicsArt_01-10-10.54.57.png','https://cdn.discordapp.com/attachments/929437812980330526/930102217661378600/PicsArt_01-10-11.08.45.png','https://cdn.discordapp.com/attachments/929437812980330526/929849836705046618/1641763802500.png','https://cdn.discordapp.com/attachments/927880420090060851/929789908300755005/1641749429748.png','https://cdn.discordapp.com/attachments/927880420090060851/929867365917802547/PicsArt_01-09-07.12.45.png'
];
 
var rand = list[Math.floor(Math.random() * list.length)];

// ;claim
  const embed = new Discord.MessageEmbed()
        .setTitle('carro perdido  ')
        .setColor('#070073')
        .setDescription(`esse carro foi achado abandonado, reaga ✅ para levar para sua garagem ou ignora `)
        .setImage(rand)
  await message.channel.send(embed).then(msg => {
  msg.react("✅")
const filtro = (reacao, usuario) => 
reacao.emoji.name === "✅" && usuario.id === message.author.id
const coletor = msg.createReactionCollector(filtro)
coletor.on("collect", () => {
  message.reactions.removeAll
message.channel.send("sucesso o carro ja ta na sua garagem :")

})
  })

db.set(`cardsoo_${message.guild.id}_${user.id}`, Date.now())

        }
   }