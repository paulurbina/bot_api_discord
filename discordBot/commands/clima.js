const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: 'clima',
	description: 'Comandos para retornar el clima en grados Celsius y Farengeis',
	async execute(message, args) {
        const embed = new MessageEmbed()
        const response = await fetch(process.env.ACCUWEATHER_KEY_URI)
        const responseJSON = await response.json()
        const temperature = responseJSON[0].Temperature
        const timeStyle = embed
                        .setTitle(`${temperature.Metric.Value} C°  /   ${temperature.Imperial.Value} F`)
                        .setColor(0xff0000)
    
        message.reply(timeStyle)
	},
}