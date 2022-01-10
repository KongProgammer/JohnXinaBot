const { Client, PartialWebhookMixin } =  require("discord.js")
const { readdirSync } = require("fs")
const { join } = require("path")


module.exports =  class extends Client {

    constructor(options) {

        super(options)
        this.commands = []

    }

    loadCommands(path = 'src/commands') {
        const categories =  readdirSync(path)

        for (const category of categories) {
            const commands  = readdirSync(`${path}/${category}`)

            for (const command of categories) {
                const commandClass = require(join(process.cwd(), `${path}/${category}/${command}`))
                const cmd = new(commandClass)(this)


                this.commands.push(cmd)
                console.log(`commando ${cmd.name} carregado!`)
            }
        }
    }

}