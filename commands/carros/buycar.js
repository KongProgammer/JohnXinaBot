const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let user = message.author;
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Digite o nome do carro, tipo ;buycar {modelo}')
        let gargemcarro= await db.fetch(message.author.id,{gargemcarro: [] });
        let amount = await db.fetch(`social_${message.guild.id}_${message.author.id}`)
// items
        if(purchase === 'Chevrolet-Astra-2.0-Hatch'){
     
            if(amount < 30000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`social_${message.guild.id}_${message.author.id}`, 30000);
            db.push(message.author.id, "Chevrolet-Astra-2.0-Hatch");
         const embed1 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
✅Sucesso
Seu novo carro Chevrolet-Astra-2.0-Hatch ja ta na garagem.
`)
.setImage("https://cdn.discordapp.com/attachments/929437812980330526/929761099086184540/1641742653553.png")

 message.channel.send(embed1);



        }
             if(purchase === 'Volkswagen-Jetta-GLI-2021'){
     
            if(amount < 150000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`social_${message.guild.id}_${message.author.id}`, 150000);
            db.push(message.author.id, "Volkswagen-Jetta-GLI-2021");
         const embed2 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
✅Sucesso
Seu novo carro Volkswagen-Jetta-GLI-2021 ja ta na garagem.
`)
.setImage("https://cdn.discordapp.com/attachments/929437812980330526/929767310447743036/1641744126142.png")

 message.channel.send(embed2);



        }
        if(purchase === 'Nissan-Maxima-1991-V6-3.0'){
     
            if(amount < 15000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`social_${message.guild.id}_${message.author.id}`, 15000);
            db.push(message.author.id, "Nissan-Maxima-1991-V6-3.0");
         const embed3 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
✅Sucesso
Seu novo carro Nissan-Maxima-1991-V6-3.0 ja ta na garagem.
`)
.setImage("https://cdn.discordapp.com/attachments/929437812980330526/929767310447743036/1641744126142.png")

 message.channel.send(embed3);



        }
         if(purchase === ' Gol-AP-1.8-turbo'){
     
            if(amount < 10000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`social_${message.guild.id}_${message.author.id}`, 150000);
            db.push(message.author.id, "Nissan-Maxima-1991-V6-3.0");
         const embed3 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
✅Sucesso
Seu novo carro Nissan-Maxima-1991-V6-3.0 ja ta na garagem.
`)
.setImage("https://cdn.discordapp.com/attachments/929437812980330526/929767310447743036/1641744126142.png")

 message.channel.send(embed3);



        }

         if(purchase === ' Gol-AP-1.8-turbo'){
     
            if(amount < 10000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`social_${message.guild.id}_${message.author.id}`, 150000);
            db.push(message.author.id, "Nissan-Maxima-1991-V6-3.0");
         const embed3 = new Discord.MessageEmbed()
.setColor('#00004d')
.setDescription(`
✅Sucesso
Seu novo carro Nissan-Maxima-1991-V6-3.0 ja ta na garagem.
`)
.setImage("https://cdn.discordapp.com/attachments/929437812980330526/929767310447743036/1641744126142.png")

 message.channel.send(embed3);



        }
      
    }

