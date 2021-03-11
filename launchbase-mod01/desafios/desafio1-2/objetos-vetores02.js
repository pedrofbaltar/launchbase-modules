const usuario = {
    nome: 'Pedro',
    idade: 17,
    tecnologia: [
        {
            name: 'HTML', 
            especialidade: 'Web'
        },
        {
            name: 'CSS',
            especialidade: 'Web'
        },
        {
            name: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} e usa a tecnologia ${usuario.tecnologia[2].name} com especialidade em ${usuario.tecnologia[2].especialidade}.`)