// Arquivo com o modelo do banco de dados.
const { date } = require('../../lib/utils')
const db = require('../../../config/db')


module.exports = {
  all(callback) {
    db.query(`
    SELECT instructors.*, count(members) AS total_students
    FROM instructors
    LEFT JOIN members ON (members.instructor_id = instructors.id)
    GROUP BY instructors.id
    ORDER BY total_students DESC`, (err, results) => {
      if(err) {
        throw `Database error! ${err}` // O throw serve para parar o banco de dados quando der um erro.
      }

      callback(results.rows) // Enviando os results como parâmetro da callback
    })
  },
  create(data, callback) {
    // Com a tabela criada no seu banco de dados, crie um const que receba uma template string com uma função SQL
    const query = `
      INSERT INTO instructors(
        name,
        avatar_url,
        gender,
        services,
        birth,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING id
    `

    const values = [ // Essa constante será responsável por substituir os valores dos placeholders ($1, $2, ...).
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date(data.birth).iso,
      date(Date.now()).iso
    ]

    db.query(query, values, (err, results) => { // db.query estamos usando o arquivo db, ele recebe três parâmetros, sendo duas as variáveis declaradas e a última é uma callback function. (O segundo parâmetro é opcional).
      if(err) {
        throw `Database error! ${err}`
      }

      callback(results.rows[0])
    })
    
    /* 
    INSER INTO nome-da-tabela( - Inserindo dentro da tabela.
      nome,
      de cada,
      campo que vai ser recebido
    )
    */

    // VALUES ($1, $2, $3) - Aqui são como placeholder que recebem os valores de cada um dos campos da tabela, um placeholder para cada campo. Eles serão trocados.

    // RETURNING ID - Depois de rodar essa função SQL, irá retornar um ID.
  },
  find(id, callback) {
    db.query(`
      SELECT *
      FROM instructors
      WHERE id = $1`, [id], (err, results) => {
      if(err) {
        throw `Database error! ${err}`
      }

      callback(results.rows[0])
    })

    // SELECT * - Selecionando todos os campos...
    // FROM instructos - ...campos de instructors...
    // WHERE id = $1 - ...onde o id for igual a X
  },
  findBy(filter, callback) {
    db.query(`
    SELECT instructors.*, count(members) AS total_students
    FROM instructors
    LEFT JOIN members ON (members.instructor_id = instructors.id)
    WHERE instructors.name ILIKE '%${filter}%'
    OR instructors.services ILIKE '%${filter}%'
    GROUP BY instructors.id
    ORDER BY total_students DESC`, (err, results) => {
      if(err) {
        throw `Database error! ${err}`
      }

      callback(results.rows)
    })
  },
  update(data, callback) {
    const query = `
      UPDATE instructors SET
        avatar_url=($1),
        name=($2),
        birth=($3),
        gender=($4),
        services=($5)
      WHERE id = $6
    `

    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      data.gender,
      data.services,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if(err) {
        throw `Database Error! ${err}`
      }

      callback()
    })
  },
  delete(id, callback) {
    db.query(`
      DELETE FROM instructors 
      WHERE id = $1`, [id], (err, results) => {
      if(err) {
        throw `Database Error! ${err}`
      }
      
      return callback()
    })
  },
  paginate(params) {
    const { filter, limit, offset, callback } = params

    let query = "",
        filterQuery = "",
        totalQuery = `(
          SELECT count(*) FROM instructors
        ) AS total`

    if(filter) {
      filterQuery = `
      WHERE instructors.name ILIKE '%${filter}%'
      OR instructors.services ILIKE '%${filter}%'
      `

      totalQuery = `(
        SELECT count(*) FROM instructors
        ${filterQuery}
      ) AS total`
    }

    query = `
    SELECT instructors.*, ${totalQuery}, count(members) AS total_students
    FROM instructors
    LEFT JOIN members ON (instructors.id = members.instructor_id)
    ${filterQuery}
    GROUP BY instructors.id LIMIT $1 OFFSET $2
    `

    db.query(query, [limit, offset], (err, results) => {
      if(err) {
        throw `Database ${err}`
      }
      
      callback(results.rows)
    })
  }
}