const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', ()=>{
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute('data-bs-theme', modo)
})

function mouseover(){
    if(itens.style.display == "none"){
        itens.style.display = "block"
    }else{
        itens.style.display = "none"
    };
}

function clickMenu(){
    if(itens.style.display == "block"){
        itens.style.display = "none"
    };
}

function toggleSelection(button) {
    button.classList.toggle('selected');
  }

window.sr= ScrollReveal({reset:true});

sr.reveal('#projetos', {duration: 1000});

sr.reveal('#habilidades', {
    rotate:{x:0, y:80, z:0},
    duration: 2000
});