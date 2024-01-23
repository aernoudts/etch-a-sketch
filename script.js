const body = document.querySelector("body");
const send = document.querySelector(".send");
const block = document.querySelector(".block");
const inputGridSize = document.querySelector(".inputGridSize");
const drawButton = document.querySelector("#draw")
const eraseButton = document.querySelector("#erase")
const startOver = document.querySelector(".startover")
drawButton.style.background = "lightgray";
body.appendChild(block);

let gridsize = 0;
let color = "black"

send.addEventListener('click', function() {
    if (inputGridSize.value <= 60) {
        while (block.firstChild) {
            block.removeChild(block.firstChild);
            }
        var gridSize = inputGridSize.value;
        createGrid(gridSize);
    }else {
        inputGridSize.value = "Invalid input!";
    }
});

drawButton.addEventListener('click', function() {
    color = "black";
    drawButton.style.background = "lightgray";
    eraseButton.style.background = "";

});

eraseButton.addEventListener('click', function() {
    color = "white";
    eraseButton.style.background = "lightgray";
    drawButton.style.background = "";
});


function changeColor(box) {
    box.addEventListener('click', function() {
            box.style.background = color;
    });
}

function createGrid(gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const container = document.createElement("container")
        container.setAttribute("class", "container");
        block.appendChild(container);
        for (let i = 1; i <= gridSize; i++) {
            let box = document.createElement("box");
            box.setAttribute("class", "box");
            box.innerHTML = "";
            changeColor(box);
            container.appendChild(box);
        }
    }
}