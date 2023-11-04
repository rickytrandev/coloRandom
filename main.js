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
var saveButton = document.querySelector("#save-palette");
var savedPalettesContainer = document.querySelector("#saved-palettes-container");
var savedPalettesMessage = document.querySelector("#saved-palettes-message");
var savedSection = document.querySelector(".saved-palettes")
var miniPalettesContainer = document.querySelector('.mini-palettes-container')
var currentColorPalette = [];
var savedPalettesArray = [];

saveButton.addEventListener('click', savePalette);
savedSection.addEventListener('click', (e) => {
  deleteSavedPalette(e)
});
btn.addEventListener('click', renderPalettes);
window.addEventListener('load', () => {
  createColorPalette()
  displayPalette()
});
colorsContainer.addEventListener('click', (event) => {
  lockInColor(event)
  setLockedProperty(e)
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
    locked: false
  }
}

function generateHex() {
  var colorHex = [
    'A', 'B', 'C', 'D', 'E', 'F', '0', '1', 
    '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    var arrayValue = colorHex[Math.floor(Math.random() * colorHex.length)]
    hex += arrayValue;
  }
  return hex;
}

function hexHtml(currentColorPalette) {
  for (i = 0; i < 5; i++) {
    pHex[i].innerText = currentColorPalette[i].text;
  }
}

function renderPalettes() {
  for (var i = 0; i < currentColorPalette.length; i++) {
    if (!currentColorPalette[i].locked) {
      var newColor = createHexCode()
      currentColorPalette[i] = newColor
      currentColorPalette[i].id = i
    }
  }
  displayPalette();
}

function lockInColor(event) {
  for (var i = 0; i < currentColorPalette.length; i++) {
    if (Number(event.target.id) === currentColorPalette[i].id) {
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
  for (i = 0; i < 2; i++) {
    if (!queryLockIcon[i].classList.contains('hidden')) {
      queryLockIcon[i].classList.add('hidden')
    } else {
      queryLockIcon[i].classList.remove('hidden')
    }
  }
}

function savePalette() {
  var palette = {}
  for (i = 0; i < currentColorPalette.length; i++) {
    palette['color' + i] = currentColorPalette[i].text
  }
  palette.id = savedPalettesArray.length;
  savedPalettesArray.push(palette)
  renderSavedPalettes()
  renderPalettes()
  return palette
}

function renderSavedPalettes() {
  savedPalettesContainer.innerHTML = ''
  for (var i = 0; i < savedPalettesArray.length; i++) {
    var miniPalette = document.createElement('div')
    var deleteBtn = document.createElement('img')
    miniPalette.id = i;
    savedPalettesArray[i].id = i
    miniPalette.classList.add('mini-palette')
    deleteBtn.id = miniPalette.id;
    deleteBtn.classList.add('delete-btn')
    deleteBtn.src = 'assets/delete.png'

    for (const color in savedPalettesArray[i]) {
      if (color !== 'id') {
        var miniBox = document.createElement('div')
        miniBox.classList.add('mini-box')
        miniBox.style.backgroundColor = savedPalettesArray[i][color];
        miniPalette.appendChild(miniBox)
        miniPalette.appendChild(deleteBtn)
        savedPalettesContainer.appendChild(miniPalette)
      }
    }
  }
  savedPalettesMessage.classList.add('hidden')
}

function deleteSavedPalette(e) {
  if (e.target.classList.contains('delete-btn')) {
    for (var i = 0; i < savedPalettesArray.length; i++) {
      if (Number(e.target.id) === savedPalettesArray[i].id) {
        savedPalettesArray.splice(i, 1)
      }
    }
  }
  renderSavedPalettes();
}