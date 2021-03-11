// Desafio 1-1: Primeiros passos com JS

// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = 'Carlos'
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura)

console.log(`Seu IMC é de ${imc}`)

if (imc >= 30) {
    console.log('Você está acima do peso')
} else {
    console.log('Você não está acima do peso')
}


// Outro modo de fazer

// let message = ""

// if (imc >= 30) {
//     message = `${nome} você está acima do peso`
// } else {
//     message = `${nome} você não está acima do peso`
// }

// console.log(message)