
// MÉTODOS P/ SLIDER DE IMAGENS
let count = 1;

 // Verificando se o botão está marcado, caso sim troca a imagem
 // em determinado tempo
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 7000)



// função de trocar para a próxima imagem
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
let home = document.querySelector(".home");
let services = document.querySelector(".services");
let accounts = document.querySelector(".accounts");
let costumerS = document.querySelector(".costumer-service"); 
let login = document.getElementById('login');
window.onscroll = function(){

    // 

    if(window.scrollY > 40){
        navScroll.classList.add('activeBorder');
        logo.classList.add('logoColor');
        nav.classList.add('navColor');
        home.classList.add('colorirNav');
        services.classList.add('colorirNav');
        accounts.classList.add('colorirNav');
        costumerS.classList.add('colorirNav');
        login.style.color = 'black';
    } else{
        navScroll.classList.remove('activeBorder');
        logo.classList.remove('logoColor');
        nav.classList.remove('navColor');
        home.classList.remove('colorirNav');
        services.classList.remove('colorirNav');
        accounts.classList.remove('colorirNav');
        costumerS.classList.remove('colorirNav');
        login.style.color = 'white';
    }   

}



// fução efeito animação de scroll

const animation = new IntersectionObserver ((entries) => {
    entries.forEach ((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showCoins')
        } else{
            entry.target.classList.remove('showCoins')
        }
    })
})

const elements = document.querySelectorAll('.coins-box')

elements.forEach((element) => animation.observe(element))