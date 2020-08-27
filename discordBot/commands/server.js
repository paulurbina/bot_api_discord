module.exports = {
	name: 'server',
	description: 'Comandos para retornar la informacion del server',
	execute(message, args) {
        message.channel.send(`Nombre del server: ${message.guild.name}\nTotal miembros: ${message.guild.memberCount}`);
	},
}