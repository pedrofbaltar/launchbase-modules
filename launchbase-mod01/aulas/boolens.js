// Booleans = true ou false
const alunosDaTurmaA = [
    {
        nome: "Pedro",
        nota: 9.8 
    },
    {
        nome: "Felipe",
        nota: 10
    },
    {
        nome: "Baltar",
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
        nota: 0
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


// Marcar aluno como reprovado se a nota for menor que 5, e enviar um mensagem

// Verificar se alunos está reprovado ou aprovado
function marcarComoReprovado(aluno) {
    aluno.reprovado = false // a princípio nenhum aluno está reprovado
    if (aluno.nota < 5) {
        aluno.reprovado = true // se a nota de algum aluno for menor que 5, esse aluno passa a estar reprovado
    } 
    // console.table(alunos) => mostra a mensagem no formato de uma tabela
}

marcarComoReprovado(alunosDaTurmaA)
marcarComoReprovado(alunosDaTurmaB)

// Enviar mensagem se aluno está aprovado ou reprovado
function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) { // já tenho a variável aluno.reprovado criado na function marcarComoReprovado(), então eu não preciso fazer: aluno.reprovado == true, pois ele já está como true na outra função
        console.log(`O Aluno ${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) { // esse é um outro jeito de criar um for, e quer dizer que: 'para cada aluno da lista de alunos faz alguama coisa, quando não tiver acabe'
       marcarComoReprovado(aluno)
       enviarMensagemReprovado(aluno) 
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)