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
    }
]

// Calular média
function calculaMedia(alunos) {
    // const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
    // return media

    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

// Está sendo passado essas duas variáveis para o mesmo parâmetro (alunos)
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
// Podemos não só passar variáveis, como também podemos passar strings, número, etc...
resultado(media1, 'turma A')
resultado(media2, 'turma B')