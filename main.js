let hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexBtn = document.querySelector('.hex-btn');
let bodyBkg = document.querySelector('body');
let hex = document.querySelector('.hex');

// Event listener

hexBtn.addEventListener('click', getHex);

function getHex() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexColor += hexNumbers[random];
  }
  bodyBkg.style.backgroundColor = hexColor;
  hex.innerHTML = hexColor;
}