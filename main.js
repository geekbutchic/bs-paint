/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 *
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count < gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
 ***********/
let mouseDown = false;


const getColor = (element) => {
  return element.classList[1];
};

const userClickSquare = (event) => {
  const square = event.target;
  const brush = document.querySelector(".current-brush");
  square.classList.replace(getColor(square), getColor(brush))
  mouseDown = false ;
};

const mouseOverSquare = (event) => {
  if (mouseDown === true) {
    const square = event.target;
    const brush = document.querySelector(".current-brush");
    square.classList.replace(getColor(square), getColor(brush));
  }
};

const squares = document.querySelectorAll(".square");

for (const square of squares) {
  square.addEventListener("mouseenter", mouseOverSquare);
  square.addEventListener("click", userClickSquare);
}

// Replaces color of Brush with item that is clicked
function clickPaletteColor(event) {
  const brush = document.querySelector(".current-brush");
  brush.classList.replace(getColor(brush), getColor(event.target));
}

const paletteColors = document.querySelectorAll(".palette-color");

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener("click", clickPaletteColor);
}

document.body.addEventListener("mousedown", () => {
  mouseDown = true   ;
});

document.body.addEventListener("mouseup", () => {
  mouseDown = false;
});

// Alternative Solution with Dark Mode   
// =======================
// Changing brush color
// =======================
 
// Get the palette color HTML elements
// const paletteColors = document.querySelectorAll('.palette-color');

// // Get the current brush HTML element
// const currentBrush = document.querySelector('.current-brush');

// // For each palette color
// for (const paletteColor of paletteColors) {

//   // When the palette color is clicked
//   paletteColor.addEventListener('click', function () {

//     // Get the current brush color class
//     const brushColorBefore = currentBrush.classList[1];

//     // The the color class of the clicked palette color
//     const newBrushColor = paletteColor.classList[1];

//     // Replace the brush's color class with the palette color class
//     currentBrush.classList.replace(brushColorBefore, newBrushColor);
//   });
// }

// // ==================================
// // Changing squares colors with click
// // ==================================

// Get all squares
// const squares = document.querySelectorAll('.square');

// // For each square
// for (const square of squares) {

//   // Add an event listener that does something when a square is clicked
//   square.addEventListener('click', function () {

//     // Get the classes of the brush in an array
//     const brushClasses = currentBrush.className.split(' ');

//     // Get the second class of the brush (the color class)
//     const brushColor = brushClasses[1];

//     // Set the square's class to 'square ' + color-class
//     square.className = `square ${brushColor}`;
//   });
// }

// // ===========================================
// // Changing squares colors with click and drag
// // ===========================================

// // Event listeners events that exist:
// // * no built-in click and drag
// // * 'mousedown'  => fires when user clicks down mouse
// // * 'mouseup'    => fires when user lifts mouse
// // * 'mouseenter' => fires when user hovers over element for first time

// // Global variable that indicates if the user is currently clicking (click down)
// let penDown = false;

// // If user clicks down
// document.addEventListener('mousedown', function () {
//   penDown = true;
// });

// // If user clicks up
// document.addEventListener('mouseup', function () {
//   penDown = false;
// });

// // For each square
// for (const square of squares) {

//   // Add a 'mouseenter' event listener
//   square.addEventListener('mouseenter', function () {

//     // If the pen is down when the mouse enters the square
//     if (penDown) {

//       // Get the classes of the brush in an array
//       const brushClasses = currentBrush.className.split(' ');

//       // Get the second class of the brush (the color class)
//       const brushColor = brushClasses[1];

//       // Set the square's class to 'square ' + color-class
//       square.className = `square ${brushColor}`;
//     }
//   });
// }

// =========
// Dark mode
// =========

// Get dark mode button
// const darkModeButton = document.querySelector('#dark-mode');

// // When clicked
// darkModeButton.addEventListener('click', function () {
  
//   // Toggle .dark-mode class on the .app element
//   const app = document.querySelector('.app');
//   app.classList.toggle('dark-mode');
// });