require('dotenv').config()

const fetch = require("node-fetch");
const { Client, MessageEmbed, Collection } = require('discord.js');
const { getRandomInt } = require('./helpers/index')

const { prefix } = require('./config/config.json')

const client = new Client();
client.commands = new Collection()

const fs = require('fs')
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setStatus(`online`)
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', async message => {

  if (message.content.includes(`jaj`)) {
    const embed = new MessageEmbed()

    const response = await fetch(process.env.GIPHY_URI + message.content)
    const responseJSON = await response.json() 
    const totalResults = responseJSON.pagination.count
    const data = responseJSON.data[getRandomInt(1, totalResults)]
    const firstElementSearch = data.images.original.url
    const image = embed.setImage(firstElementSearch)
    message.reply(image);
  }


  if (!message.content.startsWith(prefix) || message.author.bot) {
    if (message.content === 'hola') {
      const author = message.author.username
      const embed = new MessageEmbed()
      const embedGreeting = embed
        .setTitle(`Bienvenido al canal de counter strike 1.6 - ${author}`)
        .setColor(0xff0000)
        .setDescription('Escribe "/options" para ver mas...! 😉');
      message.channel.send(embedGreeting);
    }

    return
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const commandName = args.shift().toLowerCase()

  if (!client.commands.has(commandName)) return

  const command = client.commands.get(commandName)

  try {
    command.execute(message, args)
  } catch (error) {
    
  }

  // else if (command === 'kick') {
  //   /**
  //    * Esta funcionalidad sera para kickear a un usuario mencionado, ejm: !kick @paulurbina
  //    */
  //   if (!message.mentions.users.size) {
  //     return message.reply('Necesitas mencionar a un usuario para kickearlos!');
  //   }
  //   const taggedUser = message.mentions.users.first()
  //   message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  // }


  // else if (command === 'args-info') {
  //   if (!args.length) {
  //     return message.channel.send(`No proporcionaste ningun argumento, ${message.author}!`);
  //   }
  // }

});


client.login(process.env.TOKEN_DISCORD);