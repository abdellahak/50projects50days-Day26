let up = document.querySelector('.up');
let down = document.querySelector('.down');

let cardsSlider = document.querySelector('.cards-slider');
let imagesSlider = document.querySelector('.slider');

imageCounter= 0;
orienataion = 'Y';
if(document.body.offsetWidth<=800){
    orienataion = 'X';
}
window.onresize= function(){
    if(document.body.offsetWidth<=800){
        orienataion = 'X';
    }else{
        orienataion ='Y';
    }
    imagesSlider.style.transform = `translate${orienataion}(-${(100/8)*imageCounter}%)`;
    cardsSlider.style.transform = `translate${orienataion}(-${(100/8)*(7-imageCounter)}%)`;
}
up.addEventListener('click',function(){
    imageCounter++;
    if(imageCounter>7){
        imageCounter= 0;
    }
    imagesSlider.style.transform = `translate${orienataion}(-${(100/8)*imageCounter}%)`;
    cardsSlider.style.transform = `translate${orienataion}(-${(100/8)*(7-imageCounter)}%)`;
})
down.addEventListener('click',function(){
    imageCounter--;
    if(imageCounter<0){
        imageCounter= 7;
    }
    imagesSlider.style.transform = `translate${orienataion}(-${(100/8)*imageCounter}%)`;
    cardsSlider.style.transform = `translate${orienataion}(-${(100/8)*(7-imageCounter)}%)`;
})
