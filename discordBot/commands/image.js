const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const { getRandomInt } = require('../helpers/index')

module.exports = {
    name: 'image',
    description: 'Comandos para retornar una imagen buscada',
    async execute(message, args) {
        if (!args.length) {
            return message.channel.send(`No proporcionaste ningún argumento, ${message.author}!`);
        }
        else if (args[0]) {
            const embed = new MessageEmbed()
            const response = await fetch(process.env.PEXEL_URI + args[0], {
                headers: { 'Authorization': process.env.PEXEL_API_KEY }
            })
            const responseJSON = await response.json()
            const totalResults = responseJSON.per_page
            const index = getRandomInt(1, totalResults)
            const url = responseJSON.photos[index].src.small
            const imageStyle = embed.setImage(url).setColor(0xff0000)
            message.reply(imageStyle);
        }
    },
}