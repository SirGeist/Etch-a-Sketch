const gridContainer = document.querySelector(".grid-container");

const fragment = document.createDocumentFragment();
for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("grid-cell");
  fragment.appendChild(cell);
}

gridContainer.appendChild(fragment);
