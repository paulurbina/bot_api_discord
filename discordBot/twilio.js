const accountSid = 'ACd016a0791edae46eb7ad054e6dd7bed7'
const authToken = 'b81c203440eacca40057e786ff311510';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
     from: 'whatsapp:+14155238886',
     body: `It's taco time!`,
     to: 'whatsapp:+51956211273'
   })
  .then(message => console.log(message));

  