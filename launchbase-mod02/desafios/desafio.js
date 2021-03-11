const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')

        const linkWeb = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${linkWeb}`
        
        // const iFrame = document.querySelector('iframe').src = `https://rocketseat.com.br/${linkWeb}`        
        // return iFrame
    })    
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
    modal.classList.remove('active-full-scream')
})

const maximize = document.querySelector('.full-scream').addEventListener('click', () => {
    if (modal.classList.contains('active-full-scream') == false) {
        modal.classList.add('active-full-scream')
    } else {
        modal.classList.remove('active-full-scream')
    }
})

// closeModal.addEventListener('click', () => {
//     modalOverlay.classList.remove('active')
//     modalOverlay.querySelector('iframe').src = ""
//     modal.classList.remove('active-full-scream')
// })

// maximize.addEventListener('click', () => {
//     if (modal.classList.contains('active-full-scream') == false) {
//         modal.classList.add('active-full-scream')
//     } else {
//         modal.classList.remove('active-full-scream')
//     }
// })
