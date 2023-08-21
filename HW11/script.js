// const square = document.getElementById('square');
// const changeButton = document.getElementById('changeButton');

// changeButton.addEventListener('click', () => {
//   square.classList.toggle('small');
//   if (square.classList.contains('small')) {
//     square.style.backgroundColor = 'green';
//   } else {
//     square.style.backgroundColor = 'red';
//   }
// });

// const colorSquare = document.getElementById('colorSquare');
// const changeColorButton = document.getElementById('changeColorButton');

// changeColorButton.addEventListener('click', () => {
//   colorSquare.style.backgroundColor = 'blue';
//   console.log('Новый цвет квадрата: синий');
// });

// const resizeSquare = document.getElementById('resizeSquare');
// const resizeButton = document.getElementById('resizeButton');

// resizeButton.addEventListener('click', () => {
//   const currentWidth = parseInt(getComputedStyle(resizeSquare).width);
//   const currentHeight = parseInt(getComputedStyle(resizeSquare).height);

//   resizeSquare.style.width = `${currentWidth + 20}px`;
//   resizeSquare.style.height = `${currentHeight + 20}px`;
// });

// const addParagraphButton = document.getElementById('addParagraphButton');
// const rootDiv = document.querySelector('.root');

// addParagraphButton.addEventListener('click', () => {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Произвольный текст';
//   paragraph.style.color = 'blue';
//   rootDiv.appendChild(paragraph);
// });

const addParagraphButton = document.getElementById('addParagraphButton');
const rootDiv = document.querySelector('.root');
let currentColorIndex = 0;
const colors = ['blue', 'green'];

addParagraphButton.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Произвольный текст';
  paragraph.style.color = colors[currentColorIndex];
  rootDiv.appendChild(paragraph);
  
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});