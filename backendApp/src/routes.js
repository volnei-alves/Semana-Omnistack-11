const express = require('express')

const IncidentsController = require('./controllers/IncidentsController')
const OngsController = require('./controllers/OngsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

//Login
routes.post('/session', SessionController.create);
//Profile
routes.get('/profile' , ProfileController.index);
//get ongs
routes.get('/ongs', OngsController.index)
//cadastra ongs
routes.post('/ongs', OngsController.create)
//get incidents
routes.get('/incidents' , IncidentsController.index);
//cria incidents
routes.post('/incidents' , IncidentsController.create);
//deleta incidents de determinada ong
routes.delete('/incidents/:id' , IncidentsController.delete);

module.exports = routes
