module.exports = {
    name: 'options',
    description: 'Comandos para retornar todas las opciones que ofrece el bot.',
    async execute(message, args) {
        message.channel.send('Aqui saldra lo que podras hacer como parte del chat');
    },
}