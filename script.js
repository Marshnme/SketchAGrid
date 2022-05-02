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

inputDisplay.innerHTML = `${slider.value} x ${slider.value}`;
slider.oninput = function() {
    inputDisplay.innerHTML = `${this.value} x ${this.value}`;
}
// triggering canvas remake when mouse releases on the slider
slider.addEventListener("mouseup", remake)

// removing old canvas and recreating with new slider input
function remake(e){
    document.querySelectorAll(".canvas-row").forEach(e => e.remove());
    canvas(parseInt(slider.value))
}


// Selecting every canvas grid. Adding mouse click event into hover event listener to each canvas grid item to turn black on click and drag. Listening to window mouseup to remove hover event
let colorBlack = document.querySelector(".color-black");
colorBlack.addEventListener("mousedown", clickAndDrag);

function clickAndDrag(){
    let canvasDivs = document.querySelectorAll(".grid-border");

    canvasDivs.forEach(div=>{
        div.removeEventListener("mousedown", darkenColor)
        div.removeEventListener("mousedown", randomRgb)
        div.addEventListener("mousedown",changeColor)
        
    })
    window.addEventListener('mouseup', function(e){
        canvasDivs.forEach(div=>{
            div.removeEventListener("mouseover",changeColor)
        })
    })
}    

    function changeColor(e){
        e.preventDefault();
        let canvasDivs = document.querySelectorAll(".grid-border");

        canvasDivs.forEach(div=>{
         div.addEventListener("mouseover",changeColor)
        })
    
        let currentCanvasDiv = document.querySelector(`#${e.target.id}`);
        currentCanvasDiv.style.backgroundColor=`rgb(0,0,0)`;
 }


// RGB click and drag
let rgbButton = document.querySelector(".random-rgb");
rgbButton.addEventListener("mousedown",rgbClickAndDrag);

function rgbClickAndDrag(){
    let canvasDivs = document.querySelectorAll(".grid-border");
    canvasDivs.forEach(div=>{
        div.removeEventListener("mousedown", darkenColor)
        div.removeEventListener("mousedown",changeColor)
        div.addEventListener("mousedown",randomRgb)
    })
    window.addEventListener('mouseup', function(e){
        canvasDivs.forEach(div=>{
            div.removeEventListener("mouseover",randomRgb)
        })
    })
}

    function randomRgb(e){
        e.preventDefault()
        let canvasDivs = document.querySelectorAll(".grid-border");

        let red = Math.floor(Math.random() * 255 + 1);
        let blue = Math.floor(Math.random() * 255 + 1);
        let green = Math.floor(Math.random() * 255 + 1);
        
        canvasDivs.forEach(div=>{
            div.addEventListener("mouseover",randomRgb)
        })

        let currentCanvasDiv = document.querySelector(`#${e.target.id}`);
        currentCanvasDiv.style.backgroundColor = `rgb(${red},${blue},${green})`
    }


// Darkens current color on each pass until black
let darken = document.querySelector(".darken");
darken.addEventListener("mousedown", darkenClickAndDrag)

function darkenClickAndDrag(){
    let canvasDivs = document.querySelectorAll(".grid-border");
        canvasDivs.forEach(div=>{
            div.removeEventListener("mousedown", changeColor)
            div.removeEventListener("mousedown", randomRgb)
            div.addEventListener("mousedown",darkenColor)
        })
        window.addEventListener('mouseup', function(e){
            canvasDivs.forEach(div=>{
                div.removeEventListener("mouseover",darkenColor)
            })
        })
    }

    function darkenColor(e){
        e.preventDefault()
        let canvasDivs = document.querySelectorAll(".grid-border");
        
        canvasDivs.forEach(div=>{
            div.addEventListener("mouseover",darkenColor);
        })

        let currentCanvasDiv = document.querySelector(`#${e.target.id}`);
        console.log(currentCanvasDiv.style.backgroundColor)
        // currentCanvasDiv.classList.add('darken-div')
 }


// Clear button functionality
let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("mousedown",clearBoard)

function clearBoard(){
    let canvasDivs = document.querySelectorAll(".grid-border");
    canvasDivs.forEach(div=>{
        div.style.backgroundColor = "rgb(255,255,255)";
    })
}


// creating default canvas with the sliders default value
canvas(parseInt(slider.value))
