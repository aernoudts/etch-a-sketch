const body = document.querySelector("body");

for (let i = 1; i <= 16; i++) {
    const container = document.createElement("container")
    container.setAttribute("class", "container");
    body.appendChild(container);
    for (let i = 1; i <= 16; i++) {
        let box = document.createElement("box");
        box.setAttribute("class", "box");
        box.innerHTML = "box";
        container.appendChild(box);
    }
    container.appendChild(document.createElement("br"));
}