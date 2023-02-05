const container = document.querySelector("div");
const sizeButton = document.querySelector(".size-button");


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
    createPixels(sizing());
});

//Add hovering
let gridElements = document.querySelectorAll(".pixel");
gridElements.forEach(gridItem => gridItem.addEventListener("mousemove", () => {
        gridItem.style.backgroundColor = "black";
}));



function sizing(){
    let size = Number(prompt("Enter a size for the pixel field between 1 and 64"));
    if (size == NaN || size > 64 || size < 1){
        return;
    } else {
        return size;
    }
}