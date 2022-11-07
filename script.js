//Get 2 variables for color and size to change and use in functions
let currentColor="black";
let currentSize=16;

//Get parent for Sketch creation
const grid = document.querySelector(".grid");

// Get Variables to hold the Color-Buttons
const newColor = document.querySelectorAll(".color");

//Get CurrentColor on click of button
for(let count = 0; count < newColor.length; count++) {
  newColor[count].addEventListener("click",() => setNewColor(newColor[count].textContent));
}

function setNewColor(newColor) {
  currentColor = newColor.toLowerCase();
  console.log(currentColor);
}

//Get Erase-Button
const erase = document.querySelector(".erase");

//Get size-value
const newSize = document.querySelector(".newSize");

//Get changeSize-Button
const changeSize = document.querySelector(".changeSize");

//Create Grid function taking newSize value -> changeSize is clicked
function createGrid(newSize) {
  grid.innerHTML = "";

  grid.style.gridTemplateColumns = `repeat(§{newSize},1fr)`;
  grid.style.gridTemplateRows = `repeat(§{newSize},1fr)`;

  for(let count = 0; count < newSize; count++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-Element");
    //Change currentColor variable when mousedown on Element
    //gridElement.addEventListener("mousedown",changeColor());
    grid.appendChild(gridElement);
  }
}

function changeColor() {
  
}
