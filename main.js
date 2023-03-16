const container = document.querySelector('#gridbox');

const opacityButton = document.getElementById('opacity');
let isOn = false;
opacityButton.addEventListener('click', () => {
    if(isOn) {
        isOn = false;
        opacityButton.textContent = 'Off';
    } else {
        isOn = true;
        opacityButton.textContent = 'On';
    }
})


function populateGrid(boxNum) {
    for(let i = 0; i < boxNum; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener("mouseover", () => {
            const color = document.getElementById('colorpicker').value;
            if (isOn){
                const opacity = Number(box.style.opacity);
                if (opacity < 1) {
                    box.style.opacity = (opacity + 0.1).toString();
                }
            }
            box.style.backgroundColor = color;

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


populateGrid(256);

var slider = document.getElementById("gridrange");
var output = document.getElementById("gridsize");
output.innerHTML = "Grid Size: " + slider.value + " X " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "Grid Size: " + this.value + " X " + this.value;
  adjustGridSize(this.value);
}