// selecting canvas parent to append div children based on input
const canvas = document.querySelector(".canvas")
let canvasSize = document.querySelector(".canvas-size-input")

let input = 16;

let canvasGridCounter = 0
// creating the amount of rows and divs needed for canvas based on input
for(let i = 0;i<input; i++){
    let gridRow=document.createElement("div")
    gridRow.classList.add("canvas-row")
    canvas.appendChild(gridRow)
    for(let j = 0; j<input; j++){
        let gridDiv=document.createElement("div")
        gridDiv.style.width=`${500 / input}px`;
        gridDiv.style.height=`${500 / input}px`;
        gridDiv.classList.add("grid-border")
        gridDiv.id = `canvas-grid-${canvasGridCounter}`
        gridRow.appendChild(gridDiv)
        canvasGridCounter++
    }
}



// Selecting every canvas grid. Adding mouse click event into hover event listener to each canvas grid item to turn black on click and drag. Listening to window mouseup to remove hover event
let canvasDivs = document.querySelectorAll(".grid-border");
canvasDivs.forEach(div=>{
    div.addEventListener("mousedown",changeColor)
})


function changeColor(e){
    e.preventDefault();

    canvasDivs.forEach(div=>{
        div.addEventListener("mouseover",changeColor)
    })
    
    let currentCanvasDiv = document.querySelector(`#${e.target.id}`);
    currentCanvasDiv.style.backgroundColor="black"
}

window.addEventListener('mouseup', function(e){
    canvasDivs.forEach(div=>{
        div.removeEventListener("mouseover",changeColor)
    })
    })



// Clear button functionality
let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("mousedown",clearBoard)

function clearBoard(){
    canvasDivs.forEach(div=>{
        div.style.backgroundColor = "white";
    })
}