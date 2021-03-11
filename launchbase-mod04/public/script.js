const currentPage = location.pathname // Location é um outro objeto do objeto global window, assim como o 'document', serve para pegar a localização que nós estamos, o 'pathname', serve para mostrar o caminha até aonde nós estamos na aplicação
const menuItems = document.querySelectorAll('header .menu a')

for(item of menuItems) {
  if(currentPage.includes(item.getAttribute('href'))) { // Se o currentPage estive incluido no href...
    item.classList.add('active')
  }
}

// Precisamos usar o .includes para pegar de todas as abas da aplicação
