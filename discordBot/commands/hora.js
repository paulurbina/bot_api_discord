const { MessageEmbed } = require('discord.js');
const moment = require('moment')
moment.locale('es');

module.exports = {
	name: 'hora',
	description: 'Comandos para retornar la hora actual',
	execute(message, args) {
        const embed = new MessageEmbed()
        const timeFormat = moment().format(process.env.MOMENT_FORMAT)
        const timeStyle = embed.setTitle(timeFormat).setColor(0xff0000)
        message.reply(timeStyle)
	},
}