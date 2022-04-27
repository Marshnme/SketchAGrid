const canvas = document.querySelector(".canvas")

let input = 16;

for(let i =0;i<input * input; i++){
    let gridDiv=document.createElement("div")
    canvas.appendChild(gridDiv)
    gridDiv.classList.add("grid-border")
    gridDiv.id = `canvas-grid-${i}`
    
}

function changeColor(e){
    let currentCanvasDiv = document.querySelector(`#${e.target.id}`);
    currentCanvasDiv.style.backgroundColor="black"
}

let canvasDivs = document.querySelectorAll(".grid-border");
canvasDivs.forEach(div=>{
    div.addEventListener("mouseover",changeColor)
})