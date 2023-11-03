var colorOne = document.querySelector(".color-one");
var colorTwo = document.querySelector(".color-two");
var colorThree = document.querySelector(".color-three");
var colorFour = document.querySelector(".color-four");
var colorFive = document.querySelector(".color-five");
var colorBox = document.querySelectorAll('.color-box')
var btn = document.querySelector("#new-palette");
var pHex = document.querySelectorAll(".hex");
var colorsContainer = document.querySelector(".all-colors-container");
var colorBoxes = document.querySelectorAll('.color-box');
var currentColorPalette = [];
var saveButton = document.querySelector("#save-palette");
var savedPalettesContainer = document.querySelector("#saved-palettes-container");
var savedPalettesMessage = document.querySelector("#saved-palettes-message");

saveButton.addEventListener('click', savePalette);

btn.addEventListener('click', renderPalettes);
window.addEventListener('load', () => {
  createColorPalette()
  displayPalette()
});
colorsContainer.addEventListener('click', (event) => {
  lockInColor(event)
});

function displayPalette() {
  for (var i = 0; i < 5; i++) {
    colorBoxes[i].style.backgroundColor = currentColorPalette[i].text
    pHex[i].innerText = currentColorPalette[i].text
  }
}

function createColorPalette() {
  for (var i = 0; i < 5; i++) {
    currentColorPalette.push(createHexCode())
  }
}
  
function createHexCode(hexCode) {
  var hexCode = generateHex();
  return {
    text: hexCode, 
    id: currentColorPalette.length, 
    locked: false }
}

function generateHex(){
    var colorHex = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var hex = '#';
      for (var i = 0; i < 6; i++) {
      var arrayValue = colorHex[Math.floor(Math.random() * colorHex.length)]
        hex += arrayValue;
      }
      return hex;
    }  
function hexHtml(currentColorPalette){
    for (i = 0; i < 5; i++){
        pHex[i].innerText = currentColorPalette[i].text;
    }}
function renderPalettes(){
  for (var i = 0; i < currentColorPalette.length; i++) {
    if (!currentColorPalette[i].locked) {
      // console.log('index:', i);
      var newColor = createHexCode()
      // console.log(newColor);
      currentColorPalette[i] = newColor
      currentColorPalette[i].id = i
    }
  }
  displayPalette();
}

function lockInColor(event) {

  for (var i = 0; i < currentColorPalette.length; i++) {
    if (currentColorPalette[i].id == event.target.parentElement.id) {
      var indexToString = i.toString()
      var queryBox = document.getElementById(indexToString)
      var queryLockIcon = queryBox.querySelectorAll('.lock-icon');

      if (!currentColorPalette[i].locked) {
        currentColorPalette[i].locked = true
      } else {
        currentColorPalette[i].locked = false
      }
    }
  }
  for(i = 0; i < 2; i++) {
    if (!queryLockIcon[i].classList.contains('hidden')) {
      queryLockIcon[i].classList.add('hidden')
    } else {
      queryLockIcon[i].classList.remove('hidden')
    }
  }
}


function savePalette(){
  var savedPalette = currentColorPalette.slice();
  renderSavedPalette(savedPalette);
}

//rendering the saved palette
function renderSavedPalette(savedPalette) {
  var paletteContainer = document.createElement("div");
  paletteContainer.classList.add("saved-palette");

  for (var i = 0; i < savedPalette.length; i++) {
    var savedColor = document.createElement("div");
    savedColor.classList.add("saved-color-box");
    savedColor.style.backgroundColor = savedPalette[i].text;

    paletteContainer.appendChild(savedColor);
  }

savedPalettesContainer.appendChild(paletteContainer);

savedPalettesContainer.style.display = "block";
savedPalettesMessage.style.display = "none";
}