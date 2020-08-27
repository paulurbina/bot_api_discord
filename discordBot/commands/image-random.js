const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: 'image-random',
    description: 'Comandos para retornar una imagen random buscada.',
    async execute(message, args) {
        const embed = new MessageEmbed()

        const response = await fetch(process.env.UNSPLASH_URI, {
            headers: { 'Authorization': process.env.UNSPLASH_KEY }
        })

        const responseJSON = await response.json()
        const url = responseJSON.urls.small
        const image = embed.setImage(url)
        message.reply(image);
    },
}