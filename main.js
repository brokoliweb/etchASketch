const container = document.getElementById("container");
const slider = document.getElementById("grid-width");
const sliderValue = document.getElementById("range-value");
const color = document.getElementById("change-color");
const reset = document.getElementById('reset');

sliderValue.innerText = slider.value;

slider.addEventListener("input", changeValue);
slider.addEventListener("input", drawNewGrid);
reset.addEventListener('click', drawNewGrid);

function changeValue(e) {
  sliderValue.innerText = slider.value;
}

function makeRows(rows) {
  container.style.setProperty("grid-template-rows", `repeat(${rows}, 1fr)`);
  container.style.setProperty("grid-template-columns", `repeat(${rows}, 1fr)`);

  for (c = 0; c < rows * rows; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

function drawNewGrid(e) {
  console.log(e);
  container.innerText = "";
  startup();
}

function changeColor(e) {
  console.log(e);
  e.target.style.backgroundColor = `${color.value}`;
}

function startup() {
  makeRows(slider.value);

  const cells = document.querySelectorAll(".grid-item");
  console.log(cells);

  cells.forEach((cell) => cell.addEventListener("click", changeColor));
}

startup();
