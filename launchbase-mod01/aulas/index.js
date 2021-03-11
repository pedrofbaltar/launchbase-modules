// const (constante) é um formato de variável no JS que não aceita que seja recebido outros valores mais pra frente

// const nome = "Pedro" // string = texto, devem ser colocados entre áspas 'simples', "duplas", `cràses`
// const nome2 = "Felipe"
// const nome3 = `${nome} ${nome2}`

// console.log(nome3)

// console.log(typeof notaAluno01) // o typeof serve para nos mostrar o tipo de uma variável (number, string, boolean, etc...)


// Criar um programa que calcula a média das notas entre os alunos
// Se a média for maior que 5 parabenizar a turma

const aluno01 = 'Pedro'
const notaAluno01 = 9.8

const aluno02 = 'Felipe'
const notaAluno02 = 10

const aluno03 = 'Baltar'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Condicionais
if (media >= 5) {
    console.log(`A média  foi de ${media}. Parabéns!`)
} else {
    console.log('A média é menor que 5.')
}

//console.log(media)



