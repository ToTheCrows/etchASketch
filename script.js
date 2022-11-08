//Get 2 variables for color and size to change and use in functions
let currentColor = "white";
let currentSize = 16;

//Get parent for Sketch creation
const grid = document.querySelector(".grid");

// Get Variables to hold the Color-Buttons
const newColor = document.querySelectorAll(".color");

//Get CurrentColor on click of button
for (let count = 0; count < newColor.length; count++) {
  newColor[count].addEventListener("click", () => setNewColor(newColor[count].textContent));
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

  grid.style.gridTemplateColumns = `repeat(${newSize},1fr)`;
  grid.style.gridTemplateRows = `repeat(${newSize},1fr)`;

  for (let count = 0; count < Math.pow(newSize, 2); count++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-Element");
    //Change currentColor variable when mousedown on Element
    grid.appendChild(gridElement);
  }
  let gridPixels = document.querySelectorAll(".grid-Element");
  gridPixels.forEach(gridPixels => gridPixels.addEventListener("mouseover", changeColor));

}

function changeColor(e) {
  e.target.style.backgroundColor = currentColor;
  e.target.classList.remove("grid-Element");
  console.log("Should change color! ", currentColor);
}

//create Default grid
createGrid(currentSize);