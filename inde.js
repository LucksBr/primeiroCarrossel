const carrosel = document.getElementById('carrosel');
const botaoEsquerdo = document.getElementById('botaoEsquerda');
const botaoDireito = document.getElementById('botaoDireita');

let images = ['1.jpg', '2.jpg', '3.jpg'];


let idCarrosel = 0;

let contador = 0;

setInterval(alterarCarrosel,4000)

function alterarCarrosel(){


    if ( idCarrosel == 0) {
        
        carrosel.style.backgroundImage = `url(images/${images[1]})`;
        idCarrosel += 1;

    } else if ( idCarrosel != 0) { 

        idCarrosel += 1;
        carrosel.style.backgroundImage = `url(images/${images[idCarrosel]})`;
    }
        if (idCarrosel == images.length) {
            idCarrosel = 0;
            carrosel.style.backgroundImage = `url(images/${images[0]})`

        }

        
    carrosel.style.animationName = "transitin";
    
    setTimeout(function() {carrosel.style.animationName = "transition";1})

}

function animationButtons() {
    botaoEsquerdo.style.animationName = 'botaoEsquerdo';
    botaoDireito.style.animationName = 'botaoDireito';

}

function animationButtonsInvisibilty() {
    botaoEsquerdo.style.animationName = 'botaoEsquerdoInvisivel';
        botaoDireito.style.animationName = 'botaoDireitoInvisivel';
        botaoEsquerdo.style.opacity = '1';
         
}

function passarImage (event) {
    

    if (event.path[1].id == "botaoDireita" && idCarrosel == 0) {
        
        carrosel.style.backgroundImage = `url(images/${images[1]})`;
        idCarrosel += 1;

    } else if (event.path[1].id == "botaoDireita" && idCarrosel != 0) { 

        idCarrosel += 1;
        carrosel.style.backgroundImage = `url(images/${images[idCarrosel]})`;
        
        if (idCarrosel == images.length) {
            idCarrosel = 0;
            carrosel.style.backgroundImage = `url(images/${images[0]})`

        }
       
    } else if ( event.path[1].id == "botaoEsquerda" && idCarrosel == 0 ) {
        
        carrosel.style.backgroundImage = `url(images/${images[images.length - 1]})`;
        idCarrosel = images.length - 1;

    } else if ( event.path[1].id == "botaoEsquerda" && idCarrosel != 0 ) {

        idCarrosel -= 1;
        carrosel.style.backgroundImage = `url(images/${images[idCarrosel]})`;
        

    }

    contador = 1;
    
}

function animarTranslation() {
    carrosel.style.animationName = "transitin";
    
    setTimeout(function() {carrosel.style.animationName = "transition";1})
}

carrosel.addEventListener('mouseover', animationButtons)
carrosel.addEventListener('mouseout', animationButtonsInvisibilty)
botaoEsquerdo.addEventListener('click', passarImage)
botaoEsquerdo.addEventListener('click', animarTranslation)
botaoDireito.addEventListener('click', passarImage)
botaoDireito.addEventListener('click', animarTranslation)
