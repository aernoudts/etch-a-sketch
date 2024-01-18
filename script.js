const body = document.querySelector("body");
const send = document.querySelector(".send");
const block = document.querySelector(".block");
const inputGridSize = document.querySelector(".inputGridSize");
body.appendChild(block);

let gridsize = 0;

send.addEventListener('click', function() {
    if (inputGridSize.value <= 100) {
        while (block.firstChild) {
            block.removeChild(block.firstChild);
            }
        var gridSize = inputGridSize.value;
        createGrid(gridSize);
    }else {
        inputGridSize.value = "Invalid input!";
    }
});

function changeColor(box) {
    box.addEventListener('click', function() {
            box.style.background = "black"
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