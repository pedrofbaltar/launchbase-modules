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

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / 3
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function resultado(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}.`)
    }
}

resultado(media1, 'turma A')
resultado(media2, 'turma B')