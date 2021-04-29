const routes = require('express').Router()

const instagramController = require('./app/Controllers/instagramController')

routes.get('/', (req, res) => {
    res.status(200).send()
})

routes.post('/instagram', instagramController.executa)

module.exports = routes