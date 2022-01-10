const Command = require('../../structures/Command')

module.exports  = class extends Command {

constructor(client){
    super(client, {
        name: 'ping',
        description: 'Esse comando mostra o ping do bot'

    })
}
 run = (interaction) =>{
     interaction.reply("pong!!! ain")
 }
}

