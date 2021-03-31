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
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
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
let clickMouse = false;

const getColor = (element) => {
  return element.classList[1];
}

const clickSquare = (event) => {
  const square = event.target;
  const brush = document.querySelector('.current-brush');
      square.classList.replace(getColor(square)),(getColor(brush));
      mouseDown = false;
}

const mouseOverSquare = (event) => {
  if (mouseDown) {
    const square = event.target;
    const brush = document.querySelector('.current-brush');
    square.classList.replace(getColor(square),getColor(brush));  
  }
}

const squares = document.querySelectorAll('.square') 

for (const square of squares) {
  square.addEventListener('mouseenter', mouseOverSquare)
  square.addEventListener('click', clickSquare)
}

function clickPaletteColor (event) {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(getColor(brush),getColor(event.target));
}

const paletteColors = document.querySelectorAll('.palette-color');

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener('click', clickPaletteColor)
}

document.body.addEventListener('mousedown', () => {
  mouseDown = true;
})

document.body.addEventListener('mouseup', () => {
  mouseDown = false;
})


// // Alternative Version 
// // Get an array of the brush color HTML elements
// const brushColors = document.querySelectorAll('.palette-color');

// // Get the current brush color HTML element
// const currentColor = document.querySelector('.current-brush');

// // Handle a click on the palette
// function handlePaletteClick(event) {
//     // Get the HTML element that was clicked
//     const paletteColor = event.target;

//     // Get the color class of the clicked HTML element
//     const color = paletteColor.classList[1];

//     // Set the classes of the currentColor HTML element
//     currentColor.className = 'current-brush ' + color; 
// }
// // For each brush color HTML element...
// for (const brushColor of brushColors) {
//   // Add a click listener
//   console.log('click happened');
//     brushColor.addEventListener('click', handlePaletteClick);
// }

