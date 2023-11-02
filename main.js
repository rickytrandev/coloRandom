var colorOne = document.querySelector(".color-one");
var colorTwo =  document.querySelector(".color-two");
var colorThree = document.querySelector(".color-three");
var colorFour = document.querySelector(".color-four");
var colorFive = document.querySelector(".color-five");
var btn = document.querySelector("#new-palette");
var pHex = document.querySelectorAll(".hex");
var colorsContainer = document.querySelector(".all-colors-container")
var currentColorPalette;

btn.addEventListener('click', renderPalettes);
window.addEventListener('load', renderPalettes);
colorsContainer.addEventListener('click', (event) => {
  lockInColor(event)
});


function createColorPallete(){
    currentColorPalette = [];
    for(i = 0; i < 5; i++) { 
      currentColorPalette.push(createHexCode())
    }
    return currentColorPalette
  }
  
function createHexCode(hexCode) {
  var hexCode = generateHex();
  return { text: hexCode, id: currentColorPalette.length, locked: false}
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
    }
}
function renderPalettes(){
  createColorPallete()
  colorOne.style.backgroundColor = currentColorPalette[0].text;
  colorTwo.style.backgroundColor = currentColorPalette[1].text;
  colorThree.style.backgroundColor = currentColorPalette[2].text;
  colorFour.style.backgroundColor = currentColorPalette[3].text;
  colorFive.style.backgroundColor = currentColorPalette[4].text;
  hexHtml(currentColorPalette);
}

function lockInColor(event) {
  for (var i = 0; i < currentColorPalette.length; i++) {
    if (currentColorPalette[i].id == event.target.id) {
      var idToString = i.toString()
      var queryBox = document.getElementById(idToString)
      var queryLockIcon = queryBox.querySelectorAll('.lock-icon');
    }
  }
  for(i = 0; i < queryLockIcon.length; i++) {
    if (queryLockIcon[i].classList.contains('hidden')) {
      queryLockIcon[i].classList.remove('hidden')
    } else {
      queryLockIcon[i].classList.add('hidden')
    }
  }
}

//  function lockInColor(event) {
//   var lockable = document.querySelectorAll('.lock-icon');
//   for (var i = 0; i < lockable.length; i++){
//     if (event.target.classList.closest('lock-icon') == currentColorPalette[i].id) {
//       if (lockable[i].classList.contains('hidden')) {
//         lockable[i].classList.remove('hidden');
//       } else {
//         lockable[i].classList.add('hidden');
//       }
//     }
//   }
// }




// var lockable = document.querySelectorAll('.lock-icon');


// function toggled(array){
//   if (Element.target.contains('hidden')) {
//     this.remove('hidden');
//   } else {
//     this.add('hidden');
//   }

  // var locked = document.querySelector('#locked');
  // var unlocked = document.querySelector('#unlocked');
  
  // locked.classList.toggle('hidden');
  // unlocked.classList.toggle('hidden');
  // }
 // function toggled(element){






// var colorsContainer = document.querySelector(".all-colors-container")
// var lockable = document.querySelectorAll('.lock-icon');

/*for (var i = 0; i < colorsContainer.length; i++) {
  //colorsContainer[i].addEventListener('click', somefunction()) {
    var =
    var =
    var =
    var =
    var =
  } 

*/
