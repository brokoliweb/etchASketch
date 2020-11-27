const container = document.getElementById("container");
const slider = document.getElementById('grid-width');
const sliderValue = document.getElementById('range-value');

sliderValue.innerText = slider.value;

slider.addEventListener('mousemove', changeValue);
slider.addEventListener('mouseup', drawNewGrid);

function changeValue(e) {
    
    sliderValue.innerText = slider.value;
    
}


function makeRows(rows) {
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    container.style.setProperty('grid-template-columns', `repeat(${rows}, 1fr)`);
    


  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function drawNewGrid(e) {
    console.log(e);
    container.innerText = "";
    makeRows(slider.value);
    
}

makeRows(slider.value)
