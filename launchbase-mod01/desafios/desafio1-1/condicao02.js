const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const idadeContrib = (idade + contribuicao)

// if (sexo == "F") {
//     if (contribuicao >= 30 || idadeContrib >= 85) {
//         console.log(`${nome}, você pode se aposentar!`)
//     } else {
//         console.log(`${nome}, você não pode se aposentar!`)
//     } 
// } if (sexo == "M") {
//     if (contribuicao >= 35 || idadeContrib >= 90) {
//         console.log(`${nome}, você pode se aposentar!`)
//     } else {
//         console.log(`${nome}, você não pode se aposentar!`)
//     }
// }

// Outro modo de fazer

// Essas variáveis irão retornar true ou false

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}

// Diminuindo assim a quantidade de IFs