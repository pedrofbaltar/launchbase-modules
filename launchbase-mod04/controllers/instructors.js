// Para ficar mais organizado, estamos separando as functions das routes
const fs = require('fs') // File system, isso é do próprio node
const data = require('../data.json')
const { age, date } = require('../utils') // pegando o função que calcula a idade, é um objeto que estamos exportando então precisa ficar entre "{}", pois estamos desistruturando um objeto


exports.index = (req, res) => {
  res.render('instructors/index', { instructors: data.instructors })
}

// show page instructor -> irá mostrar a página de cada instrutor selecionado pelo id
exports.show = (req, res) => {
    // Para selecionar o instrutor podemos usar:
    // req.query.id
    // req.body.id
    // req.params.id = /:id/:member -> vamos usar esse

  const { id } = req.params // retirando o id do req.params e fazendo com que ele seja uma variável

  const foundInstructor = data.instructors.find((instructor) => { // econtrar instructor dentro do data.json
    return instructor.id == id // se econtrar um instructor com o id solicitado, retornar
  })

  if(!foundInstructor) { // se não econtrar um instructor...
    return res.send('Instructor not found!')
  }

  const instructor = { // reconfigurando alguns objetos do data.json
    ...foundInstructor, // vai colocar tudo o que tem dentro do foundInstructor, mas ele vai sobreescrever o que vir depois da vírgula
    age: age(foundInstructor.birth), // Passando como parâmetro o .birth para o age do util.js
    // gender: "",
    services: foundInstructor.services.split(','), // split = tranforma uma string em um array, eu só preciso falar para ele aonde eu quero quebrar a string, no caso vai quebrar quando achar uma vírgula
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at) // Intl é um constructor que podemos passar como método o DateTimeFormat('pt-BR').format(found...) ele irá formatar a data do create_at de acordo com o pt-br;
  }

  return res.render('instructors/show', { instructor }) // se der tudo certo renderizar o arquivo show.njk
}

// create
exports.create = (req, res) => {
  return res.render('instructors/create')
}

// post
exports.post = (req, res) => { // aqui recebemos os dados enviados do formulário
  // req.body -> {"avatar_url":"","name":" fefefe","birth":"20032-03-01","gender":"M","services":""}

  const keys = Object.keys(req.body) // Objetct, é um constructor que é um função que cria um objeto
  // -> ["avatar_url","name","birth","gender","services"]

  // percorrendo o array e verificando se alguma key está vazia
  for(key of keys) {
      // req.body.key == ""
    if(req.body[key] == "") { // se alguma chave estiver vazia...
      return res.send('Please, fill all fields!')
    }
  }

  // Desestruturando o req.body (desestruturamos com o let pois vamos alterar)
  let { avatar_url, birth, created_at, id, name, services, gender } = req.body // Pegando de dentro do req.body apenas o que estamos pedindo

  birth = Date.parse(birth) // Vai transformar a birth em uma date string e mandar para o req.body.birth novamente
  created_at = Date.now() // Date também é um constructor
  id = Number(data.instructors.length + 1) // Number também é um constructor  
  
  // Enviando os dados para o arquivo data.json
  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  })  

  // data.instructors.push(req.body) // push server para adicionar objetos em um array

  fs.writeFile('data.json', JSON.stringify(data, null, 2), /* JSON.stringfy(arquivo, null (colocamos null pois nao queremos passar nada no terceiro parâmetro), identação do arquivo data.json = feita a cada 2 espaços ) */ (err) => { // Passando 'erro' como parâmetro da function
    if(err) { // Se acontecer algum erro...
      return res.send('Write file error!')
    }
      
    return res.redirect('/instructors')
  }) // caminho / passando o objeto e transformando-o em um objeto .json /  callback function é uma function de uma function, ele como envio de resposta depois de um certo tempo ou depois de um certo acontecimento

  // return res.send(req.body)
}

// edit
exports.edit = (req, res) => {
  const { id } = req.params
  
  const foundInstructor = data.instructors.find((instructor) => {
    return instructor.id == id
  })

  if(!foundInstructor) {
    return res.send('Instructor not found!')
  }

  // return yyyy-mm-dd

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso
  }

  return res.render('instructors/edit', { instructor })
}

// put - atualizando usuário
exports.put = (req, res) => {
  const { id } = req.body
  let index = 0
  
  // Selecionando 
  const foundInstructor = data.instructors.find((instructor, foundIndex) => {
    if(id == instructor.id) {
      index = foundIndex // pegar o index e adicionar o foundIndex que é o número do index para encontrar o instrutor
      return true
    }
  })

  if(!foundInstructor) {
    return res.send('Instructor not found!')
  }

  const instructor = {
    ...foundInstructor, // pega todos os dados do foundInstructor
    ...req.body, // pega todas os novos dados que estarão no req.body
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
 }

  data.instructors[index] = instructor

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if(err) {
      return res.send('Write error!')
    }
    
    return res.redirect(`/instructors/${id}`)
  })
}

// delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredInstructors = data.instructors.filter(instructor => { // vai rodar a cada instructor a função filter() aonde só passa para dentro do array o que for true o que for false não entra
    return instructor.id != id // se of id for diferente do id do req.body ele retorna true, se for igual ele retorna false e tira de dentro do array
  })

  data.instructors = filteredInstructors

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if(err) {
      return res.send('Write file error!')
    }

    return res.redirect('/instructors')
  })
}