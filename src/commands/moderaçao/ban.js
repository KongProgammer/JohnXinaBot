const Discord = require("discord.js")

module.exports = {
  name: "banir",
  run: async (client, message, args) => {

if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("'👋 | ola  para usar esse comando so segir esse exemplo `!ban @user {motivo}`")
if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("🛑 | Eu nao tenho permissao de `BAN_MEMBERS` para usar esse comando para eu usar vai mo meu cargo coloque a permissao 🛑")

let member = message.mentions.members.first() || await message.guild.members.cache.get(args[0])
if(!member) return message.channel.send("Ola para usar esse comando so segir o exemplo: `*ban {@user} {motivo}` ")

if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send("🛑 |Este user possue um cargo superior ou igual ao seu,  coloque meu cargo no topo para executar a puniçao🛑")
if(message.guild.me.roles.highest.position <= member.roles.highest.position) return message.channel.send("Eu não posso banir este usuario, pois possue um cargo superior ou igual ao meu para banir coloque meu cargo no topo ")
if(member.id === message.author.id) return message.channel.send(" 🤔 Você não pode se banir!")

let motivo = args.slice(1).join(" ")
message.channel.send(`Você deseja mesmo banir o ${member}?`).then(msg => {
msg.react("✅")
const filtro = (reacao, usuario) => 
reacao.emoji.name === "✅" && usuario.id === message.author.id
const coletor = msg.createReactionCollector(filtro)

coletor.on("collect", () => {
  message.reactions.removeAll
message.guild.members.ban(member.id)


message.channel.send(`✅Banido com sucesso✅ O ${member.user.tag} foi banido o motivo ${motivo || "Motivo não informado"}`)

msg.edit(`Banimento Efetuado com Sucesso`)
})
})
}
}