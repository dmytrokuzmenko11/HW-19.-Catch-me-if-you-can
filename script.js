

const block = document.querySelector('.block');

let maxWidth = window.innerWidth - block.offsetWidth; 
let maxHeight = window.innerHeight - block.offsetHeight;

randomPosition(block);
randomColor(block);



// Functions

function randomNumber(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));   
    return rand;
}

function randomPosition(element) {
    setInterval(() => {
        let randLeft = randomNumber(0, maxWidth);
        let randTop = randomNumber(0, maxHeight);
        element.style.left = randLeft + 'px';
        element.style.top = randTop + 'px';
    }, 750);
}

function randomColor(argument) {
    setInterval(() => {
        let randColor = Math.floor(Math.random() * 16777215).toString(16);
        argument.style.background = "#" + randColor;
    }, 750);
}
