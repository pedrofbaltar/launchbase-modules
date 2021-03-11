// Esse arquivo é responsável pela conexão com o banco de dados.
const { Pool } = require('pg') // Desestruturando e pegando o 'Pool' do 'pg'; O tipo Pool, serve para eu não precisar de um login e senha toda vez que eu for executar alguma Query.

module.exports = new Pool({ // Aqui eu passo as informações para logar no banco de dados.
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'gymmanager'
})
