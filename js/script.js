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

