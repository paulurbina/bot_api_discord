const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: 'prune',
	description: 'Comandos para retornar el clima en grados Celsius y Farengeis',
	async execute(message, args) {
        console.log(args);
        if (args[0] === 'all') {
            // eliminar todos los mensajes
            await message.channel.bulkDelete(100, true)
            message.channel.send('Se elimino los mensajes (default 100 lineas)')
          } else {
            const amount = parseInt(args[0]) + 1
            if (isNaN(amount)) {
              return message.reply('eso no parece ser un número válido.');
            } else if (amount < 2 || amount > 100) {
              return message.reply('debe ingresar un número entre 2 y 100.');
            }
            message.channel.bulkDelete(amount, true).catch(err => {
              console.error(err);
              message.channel.send('Hubo un error al intentar eliminar los mensajes en este canal.!');
            });
          }
	},
}