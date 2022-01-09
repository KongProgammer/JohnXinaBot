
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {


        let carro = args.join(" ");
       
       
        if(!carro) return message.channel.send('Digite o  modelo do carro ;show {modelo} caso vc nao sabe os modelos a venda escreve ;carros ou ;caminhao para ver os modelos')
 
        if(carro === 'Bugatti-Chiron'){
     
         const embed1 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(` aqui em baixo, para  ver as vantagem do carro `)
.setImage("https://cdn.discordapp.com/attachments/927880420090060851/929789908300755005/1641749429748.png")

 message.channel.send(embed1);


        }

        if(carro === 'Volkswagen-Jetta-GLI-2021'){
     
         const embed1 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(` aqui em baixo, para  ver as vantagem do carro `)
.setImage("https://cdn.discordapp.com/attachments/927880420090060851/929867365917802547/PicsArt_01-09-07.12.45.png")

 message.channel.send(embed1);


        }
      
    }

