// Criar um programa que calcula a média das turmas de alunos e envia uma mensagem do cáculo da média.
const alunosDaTurmaA = [
    {
        nome: "Pedro",
        nota: 1.8 
    },
    {
        nome: "Felipe",
        nota: 10
    },
    {
        nome: "Rodrigo",
        nota: 2
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: "Enzo",
        nota: 10
    },
    {
        nome: "Luana",
        nota: 10
    },
    {
        nome: "Waldir",
        nota: 0
    },
    {
        nome: 'Novo aluno',
        nota: 5
    }
]

// Estruturas de repetição
// Calular média
// Agora essa função é inteligente sem importar quanto alunos tem
function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) { // enquanto o 'i' for menor que o número total de alunos o laço de repetição continuará
        soma = soma + alunos[i].nota // A let soma aqui recebe um novo valor, ela recebe o seu valor atual + o valor da variável alunos na posição do 'i'
    }
    // let: diferente da const, ela pode mudar de valor no decorrer do código
    // length: calcula a quantidade de objetos dentro do array
    // i++: i = i + 1, i = valor atual de i + 1

    const media = soma / 3
    return media
}

// Com essa função de calcular média ele só irá pegar 3 alunos...
// function calculaMedia(alunos) {
//     return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// }

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


// Resultado
function resultado(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}.`)
    }
}

resultado(media1, 'turma A')
resultado(media2, 'turma B')