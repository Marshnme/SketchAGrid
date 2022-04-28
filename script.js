// selecting canvas parent to append div children based on input
const canvasContainer = document.querySelector(".canvas")

// creating the amount of rows and divs needed for canvas based on input and applying event listeners to current canvas
function canvas(input){
    let canvasGridCounter = 0
    for(let i = 0;i<input; i++){
        let gridRow=document.createElement("div")
        gridRow.classList.add("canvas-row")
        canvasContainer.appendChild(gridRow)
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
    clickAndDrag()
    clearBoard()
}


// grabbing slider and updating slider output when slider input is changed

let slider = document.getElementById("myRange");
let inputDisplay = document.querySelector(".current-size")
inputDisplay.innerHTML = slider.value;
slider.oninput = function() {
    inputDisplay.innerHTML = this.value;
}
// triggering canvas remake when mouse releases on the slider
slider.addEventListener("mouseup", remake)

// removing old canvas and recreating with new slider input
function remake(e){
    document.querySelectorAll(".canvas-row").forEach(e => e.remove());
    canvas(parseInt(slider.value))
}


// Selecting every canvas grid. Adding mouse click event into hover event listener to each canvas grid item to turn black on click and drag. Listening to window mouseup to remove hover event
function clickAndDrag(){
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
        currentCanvasDiv.style.backgroundColor="black";
    }

    window.addEventListener('mouseup', function(e){
        canvasDivs.forEach(div=>{
            div.removeEventListener("mouseover",changeColor)
        })
    })

}


// Clear button functionality
let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("mousedown",clearBoard)

function clearBoard(){
    let canvasDivs = document.querySelectorAll(".grid-border");
    canvasDivs.forEach(div=>{
        div.style.backgroundColor = "white";
    })
}

// creating default canvas with the sliders default value
canvas(parseInt(slider.value))
