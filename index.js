require("dotenv").config()

const Client = require("./src/structures/Client")


const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
        
    
})
client.once('ready', function (){

console.log("bot")

})

client.login(process.env.BOT_TOKEN)