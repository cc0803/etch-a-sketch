const container = document.querySelector(".container");
const sizeButton = document.querySelector(".size-button");
const rainbowButton = document.querySelector(".rainbow-button")
const clearButton = document.querySelector(".clear")
let rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];
let count = 0;


//Create Pixelfield
function createPixels(number){
    for (let i = 0; i < (number * number); i++){
        let newNode = document.createElement("div");
        newNode.classList.add("pixel");
        newNode.style.height = `${800 / number}px`;
        newNode.style.width = `${800 / number}px`;
        container.appendChild(newNode);
    }
}
//Get size for pixelfield
sizeButton.addEventListener("click", () => {
    removeNodes();
    createPixels(sizing());
    hover();
});

//Add hovering
function hover() {
    let gridElements = document.querySelectorAll(".pixel");
    gridElements.forEach(gridItem => gridItem.addEventListener("mousemove", () => {
            gridItem.style.backgroundColor = "black";
    }));
}

//Get the size of the pixel field
function sizing(){
    let size = Number(prompt("Enter a size for the pixel field between 1 and 64"));
    if (size == NaN || size > 64 || size < 1){
        return;
    } else {
        return size;
    }
}

function removeNodes(){
    let gridElements = document.querySelectorAll(".pixel");
    if (gridElements !== null){
        gridElements.forEach(gridItem => gridItem.remove());
    }
    return;
}

rainbowButton.addEventListener("click", () =>{
    let gridElements = document.querySelectorAll(".pixel");
    gridElements.forEach(gridItem => {
        gridItem.addEventListener("mousemove", () =>{
            randomColor(gridItem);
        })
    })
});

function randomColor(element){
    if (count == rainbow.length){
        count = 0;
    } 
    element.style.backgroundColor = rainbow[count];
    count++;
}

clearButton.addEventListener("click", () => {
    let gridElements = document.querySelectorAll(".pixel");
    gridElements.forEach(gridItem => gridItem.style.backgroundColor = "white");
});