// Main container
const gridContainer = document.querySelectorAll(".grid-container");
let size = 16;

gridContainer.forEach((gridContainer) => {
  // Use a fragment to efficiently append all of the cells
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    // Change grid cell background color when mouse hovers over it
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "blue";
    });
    fragment.appendChild(cell);
  }

  // Append the fragment to our container
  gridContainer.appendChild(fragment);

  // Creating Grid style class for the main container
  gridContainer.classList.add("styled-grid-container");
});
