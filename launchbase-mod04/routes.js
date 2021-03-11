const express = require('express')
const routes = express.Router() // faz com que a variável seja responsável pelas rotas
const instructors = require('./controllers/instructors') // Chamando o arquivo instructors.js que contém as functions
const members = require('./controllers/members')

// HTTP VERBS:
// get : receber RESOURCE
// post : criar ou salvar um NOVO RESOURCE com dados enviados
// put : atualizar RESOURCE
// delete : deletar RESOURCE
// o RESOURCE nesse caso é o instructor e members

routes.get('/', (req, res) => {
  return res.redirect('/instructors')
})

routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.get('/instructors/:id/edit', instructors.edit)
routes.post('/instructors', instructors.post)
routes.put('/instructors', instructors.put)
routes.delete('/instructors', instructors.delete)

routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)
routes.post('/members', members.post)
routes.put('/members', members.put)
routes.delete('/members', members.delete)

module.exports = routes // exportando as rotas