const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes') // chamando o arquivo routes
const methodOverride = require('method-override') // chamando o 'method-override'

const server = express()

// middlewares, coisas que interceptam o ponto A ao ponto B colocando alguma função ou configuração no meio do caminho, no caso, no meio do caminho foi chamado a pasta public e a routes
server.use(express.urlencoded({ extended: true })) // essa linha é resposável por fazer funcionar o req.body do formulário depois de enviados
server.use(express.static('public')) // middleware que chama a pasta public
server.use(methodOverride('_method')) // configurando o method-override, serve para sobreescrever o método que estamos usando, através dos middlewares, é isso que o Override faz, sobreescreve por cima, e irá sobreescrever o metodo correto
server.use(routes) // middleware que cahama as rotas

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, () => {
    console.log('server is running 🚀') 
})