const MessagingResponse = require('twilio').twiml.MessagingResponse

const fetch = require('node-fetch')

const receivedMessage = async (req, res) => {
    console.log(req.body.Body)
    const body = req.body.Body
    // const body = { name: 'tony' }
    // aqui hara un post a discord
    await fetch('https://discordapp.com/api/gateway/bot',  {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })


    const twiml = new MessagingResponse()

    // twiml.message('This is my response')
    res.send(twiml.toString())
}

module.exports = {
    receivedMessage
}