//BUTTONS START
const opacityButton = document.getElementById('opacity');
let opaYes = false;
opacityButton.addEventListener('click', () => {
    if(opaYes) {
        opaYes = false;
        opacityButton.textContent = 'Off';
        opacityButton.style.backgroundColor = '#ffffff';
    } else {
        opaYes = true;
        opacityButton.textContent = 'On';
        opacityButton.style.backgroundColor = '#E96479';
    }
})

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    adjustGridSize(slider.value);
})

const rainbowButton = document.getElementById('rainbow');
let rainYes = false;
rainbowButton.addEventListener('click', () => {
    if(rainYes) {
        rainYes = false;
        rainbowButton.textContent = 'Off';
        rainbowButton.style.backgroundColor = '#ffffff';
    } else {
        rainYes = true;
        rainbowButton.textContent = 'On';
        rainbowButton.style.backgroundColor = '#E96479';
    }
})
//BUTTONS END

const container = document.querySelector('#gridbox');
populateGrid(256);

let slider = document.getElementById("gridrange");
let output = document.getElementById("gridsize");
output.innerHTML = "Grid Size: " + slider.value + " X " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "Grid Size: " + this.value + " X " + this.value;
  adjustGridSize(this.value);
}

function populateGrid(boxNum) {
    for(let i = 0; i < boxNum; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener("mouseover", () => {
            const color = document.getElementById('colorpicker').value;
            if (opaYes){
                const opacity = Number(box.style.opacity);
                if (opacity < 1) {
                    box.style.opacity = (opacity + 0.1);
                }
            } else {
                box.style.opacity = '1';
            }
            if (rainYes){
                box.style.backgroundColor = randomColour();
            } else {
                box.style.backgroundColor = color;
            }
        });
        container.appendChild(box);
    }
}

function adjustGridSize(size){
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    populateGrid(size*size)
}

function randomColour(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
