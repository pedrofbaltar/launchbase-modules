// Criar um programa que calcula a média das turmas de alunos e envia mesagem do cáculo da média.

const alunosDaTurmaA = [
    {
        nome: 'Pedro',
        nota: 1.8
    },
    {
        nome: 'Felipe',
        nota: 10
    },
    {
        nome: 'Baltar',
        nota: 2
    },
    {
        nome: 'Mais um aluno',
        nota: 8
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Enzo',
        nota: 10
    },
    {
        nome: 'Waldir',
        nota: 0
    },
    {
        nome: 'Luana',
        nota: 10
    },
    {
        nome: 'Novo aluno',
        nota: 5
    },
]

// function calculaMedia(alunos) {
//     return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// }

function calculaMedia(alunos) {
    let soma = 0;


    // (variável 'i' criada; se i for < que o número de alunos; adicionar ao 'i' + 1), o que irá fazer é adicionar uma unidade enquanto o valor de 'i' for menos que o número de alunos
    for (let i = 0; i < alunos.length; i++) { // estrutura de repetição
        soma = soma + alunos[i].nota 
        // aqui está pegando a nota de cada aluno na posição 'i', ou seja, a posição que for igual o valor de 'i' no momento
    }   
    // enquanto a 'const' é uma variável cosntante, e não irá mudar, a let vai permitir com que o valor da variável mude, no caso a variável 'i'
    // por termos criado uma variável em um array, os JS permite que usemos o length, o que ele faz é informar quantos objetos possui dentro do array
    // i++ => i = i + 1
    const media = soma / alunos.length // media = soma / total de alunos
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function resultado(media, turma) {  
    if(media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}`)
    }
}

resultado(media1, 'Turma A')
resultado(media2, 'Turma B')