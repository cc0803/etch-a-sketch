const container = document.querySelector("div");

for (let i = 0; i < 256; i++){
    let newNode = document.createElement("div");
    newNode.classList.add("pixel");
    container.appendChild(newNode);
}

let gridElements = document.querySelectorAll(".pixel");
gridElements.forEach(gridItem => gridItem.addEventListener("mousedown", () => {
    gridItem.addEventListener("mousemove", () => {
        gridItem.style.backgroundColor = "green";
    });
}));
