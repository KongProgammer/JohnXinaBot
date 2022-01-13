
/*
🔸 
🔻
*/
const Discord = require('discord.js');
 
exports.run = async (client, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('BLUE')

  .setTitle('CarGuru Help')
  .setDescription(`Olá ${message.author}

Reage, os emoji de acordo com as funçoes

🌎 Comandos Geral
🤣 - Comandos Diversao 
👮 - Comandos Moderaçao
🔹 - Comandos NATO


🔻 vc tem 30 para reagir se nao vc tem executar esse comando denovo para ver as informaçoes
  `)

  message.channel.send(comandos).then(msg => {
    msg.react('🌎').then(r => {
      msg.react('🤣').then(r => {
        msg.react('👮').then(r => {
            msg.react('🔹').then(r => {
 
        })
 
        })
      })
    })
 
    const geralFilter = (reaction, user) => reaction.emoji.name === '🚗' && user.id === message.author.id;
      const diversaoFilter = (reaction, user) => reaction.emoji.name === '💰' && user.id === message.author.id;
    const modFilter = (reaction, user) => reaction.emoji.name === '📁' && user.id === message.author.id;
  const natoFilter = (reaction, user) => reaction.emoji.name === '🌎' && user.id === message.author.id;

    const geral = msg.createReactionCollector(geralFilter);
      const diversao = msg.createReactionCollector(diversaoFilter);
    const mod = msg.createReactionCollector(modFilter);
 const nato = msg.createReactionCollector(natoFilter);

 // ----------------
    geral.on('corrida', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('Corrida')
        .setDescription(`
 🔻;atm
Para ver as informaçoes do saldo
🔸 ;daily
🔻 ; para pegar social credit diaramente
🔸 ;loja
🔻 para ver as coisas a venda
🔸 ;comprar {item}
🔻 para comprar uma coisa
🔸;darsocial
🔻 dar seus creditos social para alguma pessoa
🔸 ;rank
🔻para ver quem tem mais social credit
🔸 ;trabalhar
🔻 se voce quiser ter mais creditos sociais vc pode trabalhar para ganhar
🔸 ;cassino
🔻aposte seu creditos
        `)
      .setColor('GREEN')
      msg.edit(embed);
      })
 
 // --------------------------
   diversao.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('ECONOMIA')
      .setDescription(`
             comandos economia
       Crank - para ver quem e mais rico
       Carriscar - arrisque seus 2.000 creditos
       Cdaily - pegue 2.000 creditos diarios 
      

      `)
      .setColor('PURPLE')
      msg.edit(embed);
    })
 // -----------------------------
    mod.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('Carros')
       .setDescription(`
       
       Ccarros - para ver a lista de carros a venda
       Csell - para vender seu carro
       Cshow - para ver as informaçoes do seu carro
       Cgaragem - para ver seus carros na garagem 
       Cclaim - pega um carro de graça aleatorio 

       
       
       `)
      .setColor('#1600f7')
      msg.edit(embed);
    })

     nato.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('Geral')
       .setDescription(`
       comandos geral
       Ccd - para ver quanto tempo vc ta com Cooldowns
       Chelp - para ver todos os comandos 
       Cinfo - para ver as informaçoes do bot
       `)
      .setColor('#1600f7')
      msg.edit(embed);
    })
 
 
 
 
  })
 
 
}