/*
    OPERADORES DE COMPARAÇÃO

    > Maior
    < Menor
    >= Maior igual
    <= Menor igual
    == Igual
    === Igual e do mesmo tipo
    != Diferente
    !== Diferente, inclusive do tipo

*/

// DESAFIO 1
// Verificar se a pessoa é maior que 18 anos
// Se sim, deixar a pessoa entrar, se não, bloquear a entrada
// Se a pessoas tiver 17 anos, avisar para voltar quando fizer 18

// const idade = 18

// if (idade >= 18) {
//     console.log('Deixar entrar')
// } else {
//     console.log('Bloquear entrada')
// } if (idade == 17) {
//     console.log('Volte quando tiver 18')
// }

/*
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira

    || "OU" Uma das condições veme ser verdadeira para que a condição final seja verdadeira

    ! "NÃO" Nega toda a condição

*/

// Exemplos

// console.log(5 == 5 && 6 == 6) // true
// console.log(5 == 5 && 6 != 6) // false

// console.log(5 == 5 || 6 == 6) // true
// console.log(5 == 5 || 6 != 6) // true

// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) // false

// DESAFIO 1 - Com operadores lógicos

// Verificar se a pessoa é maior que 18 anos
// Se sim, deixar a pessoa entrar, se não, bloquear a entrada
// Se a pessoas tiver 17 anos, avisar para voltar quando fizer 18

// const idade = 17

// if (!(idade >= 18) || idade == 17) {
//     console.log('Bloquear entrada')
// } else {
//     console.log('Deixar entrar')
// }

/*
    OPERADORES ARITIMÉTICOS

    * Mutiplicação
    / Divisão
    % Resto da divisão
    + Adição
    - Subtração
*/