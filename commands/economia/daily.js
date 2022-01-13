const db = require('quick.db');
const ms = require('parse-ms');
const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
        let user = message.author;
        let timeout = 43200000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(` ❌ | você ja pegou o seu credito social hoje,  volte em  ${time.hours} hora(s), ${time.minutes} minutos`)
        } else {
            let amount = Math.floor(Math.random() * 1900) + 1;

            let valimposto = 700
            db.add(`social_${message.guild.id}_${user.id}`, amount)
             db.add(`imposto_${message.guild.id}_${user.id}`, valimposto)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

const embed = new Discord.MessageEmbed()
.setColor('#00004d')
.setTitle("💵 Daily💵")
.setDescription(`
${user} Voce ganhou:

💰Creditos Sociais final :
${amount}

❌ imposto cobrado:
${valimposto}


`)

 message.channel.send(embed);

        }
    }