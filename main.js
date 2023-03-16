const container = document.querySelector('#gridbox');

function populateGrid(boxNum) {
    for(let i = 0; i < boxNum; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
        container.appendChild(box);
    }
}

function adjustGridSize(){
    let size = 0;
    do {
        size = prompt("New Grid Size? (1 - 100)");
    } while (size < 1 || size > 100);

    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    populateGrid(size*size)
}


populateGrid(256);