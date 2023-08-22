
// MÉTODOS P/ SLIDER DE IMAGENS
let count = 1;

 // Verificando se o botão está marcado, caso sim troca a imagem
 // em determinado tempo
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 7000)



// função pra trocar pra próxima imagem
function nextImage(){
    count ++;
    if(count>2){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}


const productContainers = [...document.querySelectorAll('.services-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Função pra mudar a navbar ao rolar a página

let navScroll = document.querySelector("header");
let logo = document.querySelector(".logo");
let nav = document.querySelector(".navbar");
window.onscroll = function(){

    if(window.scrollY > 40){
        navScroll.classList.add('activeBorder');
        logo.classList.add('logoColor');
        nav.classList.add('navColor');
    } else{
        navScroll.classList.remove('activeBorder');
        logo.classList.remove('logoColor');
        nav.classList.remove('navColor');
    }

}