// selecting canvas parent to append div children based on input
const canvas = document.querySelector(".canvas")

let input = 16;

let canvasGridCounter = 0
// creating the amount of divs needed for canvas based on input
for(let i =0;i<input; i++){
    // let gridDiv=document.createElement("div")
    // canvas.appendChild(gridDiv)
    // gridDiv.classList.add("grid-border")
    // gridDiv.id = `canvas-grid-${i}`
    for(let j = 0; j<input; j++){
        let gridDiv=document.createElement("div")
        // gridDiv.style.width=`${50 / input}%`;
        // gridDiv.style.height=`${50 / input}%`;
        gridDiv.classList.add("grid-border")
        gridDiv.id = `canvas-grid-${canvasGridCounter}`
        canvas.appendChild(gridDiv)
        canvasGridCounter++
    }
}


// Selecting every canvas grid. Adding hover event listener to each canvas grid item to turn black on hover

function changeColor(e){
    let currentCanvasDiv = document.querySelector(`#${e.target.id}`);
    currentCanvasDiv.style.backgroundColor="black"
}

let canvasDivs = document.querySelectorAll(".grid-border");
canvasDivs.forEach(div=>{
    div.addEventListener("mouseover",changeColor)
})



// Clear button functionality
let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("mousedown",clearBoard)

function clearBoard(){
    canvasDivs.forEach(div=>{
        div.style.backgroundColor = "white";
    })
}