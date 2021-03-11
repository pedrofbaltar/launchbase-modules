const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

// Calcular soma de receitas de usuários
// Calcular soma de despesas de usuários
// Retornar saldo (receitas - despesas)

// Função calculaSado recebe receitas e despesas do USUÁRIO
function calculaSaldo(receitas, despesas){
    // Preciso usar a função somaNumeros
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    
    // Deve retornar o saldo (receitas - despesas)
    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    // Soma todos os números dentro do array "numeros"
    let soma = 0
    for(let numero of numeros) {
        soma = soma + numero
    }
    // Retorna a soma dos números
    return soma
}

// Percorra o array de usuários
for (let usuario of usuarios) {
    // Para cada usuário chame a função caculaSaldo
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    // SE saldo é positivo ou negativo:
    const saldoPositivo = saldo >= 0
    if(saldo >= 0) {
        // positvo
        console.log(`${usuario} possui saldo POSITIVO de ${saldo.toFixed(2)}`) // .toFixed(2) => fixar o número a duas casas depois da vírgula. Podemos colocar quantas casas desejaros.
    } else {
        // negativo
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`)
    }
}