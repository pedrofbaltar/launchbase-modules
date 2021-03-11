// Usuários e tecnologias
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
const usuarios = [
    {
         nome: "Carlos", tecnologias: ["HTML", "CSS"] // true
    },
    {
         nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] // true
    },
    {
         nome: "Tuane", tecnologias: ["HTML", "Node.js"] // false
    }    
];

// Função para checar se o usuário usa CSS
function checarSeUsuarioCSS(usuario) { // Esse parâmetro eu posso colocar qualquer nome
    for (let tecnologia of usuario.tecnologias) {
        const encontreiTecnologiaCSS = tecnologia === 'CSS'
        if(encontreiTecnologiaCSS) {
            return true
        } 
    }
    return false // Se não encontrar o true e antes de encerrar a função, irá retornar um false para os usuário que não possui CSS
}

// Percorrendo o array de objetos e revelando no console quem trabalha com CSS verificando cada objeto
for (let i = 0; i < usuarios.length; i++) { 
    const usuarioTrabalhaComCSS = checarSeUsuarioCSS(usuarios[i]);
    // esteUsuarioPossuiCSS ou true ou false
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
// checarSeUsuarioCSS(usuarios) // Roda a função passando a const 'usuarios' como parâmetro da função, e isso será atribuido à variável 'usuario' que está na função. Basicamente o que está sendo feito é: const usuario = usuarios

// 6 coisas que PRECISA saber sobre funções (iniciante)

// 1 - [x] Escrever / criar uma função
// 2 - [x] Saber enviar um dado para dentro da função (parâmetros)
// 3 - [x] Saber como enviar um dado para fora da função (return)
// 4 - [x] Saber utlizar a função com as variáveis => nomeDaFunção(parâmetros)
// 5 - [x] Saber como enviar o dado para dentro da função quando executar ela
// 6 - [x] Saber como capturar o dado enviado de dentro da função para fora

// Função server para reutilizar um bloco de código
// A função não precisa obrigatóriamente RECEBER  ou RETORNAR valores