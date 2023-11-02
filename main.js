var colorOne = document.querySelector(".color-one");
var colorTwo = document.querySelector(".color-two");
var colorThree = document.querySelector(".color-three");
var colorFour = document.querySelector(".color-four");
var colorFive = document.querySelector(".color-five");
var colorBox = document.querySelectorAll('.color-box')
var btn = document.querySelector("#new-palette");
var pHex = document.querySelectorAll(".hex");
var colorsContainer = document.querySelector(".all-colors-container");
var lockable = document.querySelectorAll(".lock-icon");

var currentColorPalette = [];

btn.addEventListener("click", renderPalettes);
window.addEventListener("load", renderPalettes);
colorsContainer.addEventListener("click", (e) => {
  lockInColor(e);
  setLockedProperty(e);
  console.log(currentColorPalette);
});

function createColorPallete() {
  for (i = 0; i < 5; i++) {
    currentColorPalette.push(createHexCode(generateHex()));
  }
  return currentColorPalette;
}

function createHexCode(hexCode) {
  return { text: hexCode, id: currentColorPalette.length, locked: false };
}

function generateHex() {
  var colorHex = [
    "A", "B", "C", "D", "E", "F", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9",
  ];
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    var arrayValue = colorHex[Math.floor(Math.random() * colorHex.length)];
    hex += arrayValue;
  }
  return hex;
}

function hexHtml(currentColorPalette) {
  for (i = 0; i < currentColorPalette.length; i++) {
    pHex[i].innerText = currentColorPalette[i].text;
  }
}

function renderPalettes() {
  createColorPallete();
  for (var i = 0; i < 5; i++) {
    colorBox[i].style.backgroundColor = currentColorPalette[i].text;
    hexHtml(currentColorPalette)
  }
}

function lockInColor(e) {
  for (var i = 0; i < lockable.length; i++) {
    if (lockable[i].id === e.target.id) {
      toggleLockIcon(lockable[i]);
    }
  }
}

function toggleLockIcon(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function setLockedProperty(e) {
  for (var i = 0; i < currentColorPalette.length; i++) {
    if (currentColorPalette[i].id === Number(e.target.id)) {
      if (currentColorPalette[i].locked === false) {
        currentColorPalette[i].locked = true;
      } else {
        currentColorPalette[i].locked = false;
      }
    }
  }
  return currentColorPalette;
}
