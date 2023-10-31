var colorOne = document.querySelector("#color-one");
var colorTwo =  document.querySelector("#color-two");
var colorThree = document.querySelector("#color-three");
var colorFour = document.querySelector("#color-four");
var colorFive = document.querySelector("#color-five");
var btn = document.querySelector("#new-palette");
var pHex = document.querySelectorAll(".hex");
var currentColorPalette;

btn.addEventListener('click', renderPalettes);
window.addEventListener('load', renderPalettes);

function createColorPallete(){
    currentColorPalette = [];
    for( i = 0; i < 5; i++){
        
    currentColorPalette.push(generateHex())
    }
   
    return currentColorPalette
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
        pHex[i].innerText = currentColorPalette[i];
    }
}
function renderPalettes(){
createColorPallete()
colorOne.style.backgroundColor = currentColorPalette[0];
colorTwo.style.backgroundColor = currentColorPalette[1];
colorThree.style.backgroundColor = currentColorPalette[2];
colorFour.style.backgroundColor = currentColorPalette[3];
colorFive.style.backgroundColor = currentColorPalette[4];
hexHtml(currentColorPalette);
}
