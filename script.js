const body = document.querySelector("body");
const block = document.createElement("block");
body.appendChild(block);
let gridsize = 0

function createGrid(gridsize) {
    for (let i = 1; i <= gridsize; i++) {
        const container = document.createElement("container")
        container.setAttribute("class", "container");
        block.appendChild(container);
        for (let i = 1; i <= gridsize; i++) {
            let box = document.createElement("box");
            box.setAttribute("class", "box");
            box.innerHTML = "";
            container.appendChild(box);
        }
        container.appendChild(document.createElement("br"));
    }
}