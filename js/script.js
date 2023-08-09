
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