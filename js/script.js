const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', ()=>{
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute('data-bs-theme', modo)
})
function toggleSelection(button) {
    button.classList.toggle('selected');
  }

window.sr= ScrollReveal({reset:true});

sr.reveal('#projetos', {duration: 1000});

sr.reveal('#habilidades', {
    rotate:{x:0, y:80, z:0},
    duration: 2000
});

sr.reveal('#sobreMim', {
    rotate:{x:20, y:100, z:0},
    duration: 2000
});