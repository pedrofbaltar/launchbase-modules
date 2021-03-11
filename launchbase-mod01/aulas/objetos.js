// Os objetos no JS são definidos entre {chaves}, e são propridades que recebem valores
// const aluno01 = {
//     nome: "Pedro",
//     nota: 9.8 // o último item não recebe vírgula
// }

// const aluno02 = {
//     nome: "Felipe",
//     nota: 10
// }

// const aluno03 = {
//     nome: "Rodrigo",
//     nota: 2
// }

// para acessar uma variável dentro de um objeto nós usamos o "." (ponto) e escrevemos a propriedade, veja:
// const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

// para agrupar todas esses objetos em uma única variável, usamos os [colchetes] o nome que damos a isso é "array" (ou vetores)
const alunos = [
    {
        nome: "Pedro",
        nota: 9.8 // o último item não recebe vírgula
    },
    {
        nome: "Felipe",
        nota: 10
    },
    {
        nome: "Rodrigo",
        nota: 2
    }
]

// Posso criar objetos dentro de um bloco através de variáveis, veja
// alunos[0].novaVariável = 'Nova variável'

// para acesasr um objeto dentro de um array usamos os [colchetes] e colocamos a posição do objeto dentro do array, lembrando que começam a contar do número zero adiante. E para acessar uma variavel dentro de um objeto que está dentro de um array fazemos o mesmo processo, depois colocamos um "." (ponto) e o nome da variável, veja:
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// o console é um objeto por isso "console." o "log" é um método
console.log(media)

// const nomeDeAlunos = [
//     'Pedro',
//     'Felipe',
//     'Baltar'
// ]

// console.log(alunos[0]) // Pedro
// console.log(alunos[1]) // Felipe
// console.log(alunos[2]) // Baltar