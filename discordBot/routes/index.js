const { Router } = require('express')
const router = Router()

const { receivedMessage } = require('../controllers/index.controller')


router.post('/msm-whatsapp', receivedMessage)


module.exports = router