function generateGrid(size) {
  // Main container
  const gridContainer = document.querySelectorAll(".grid-container");

  gridContainer.forEach((gridContainer) => {
    // Emptying the existing grid
    gridContainer.innerHTML = "";
    // Use a fragment to efficiently append all of the cells
    const fragment = document.createDocumentFragment();

    // Loop size * size
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
}

document.getElementById("generate-grid-btn").addEventListener("click", () => {
  // Retrieving the string input from the html
  const gridSizeInput = document.getElementById("grid-size");
  // Converting the string to int
  const gridSize = parseInt(gridSizeInput.value);

  // If grid is out of bounds, alert error and try again. Otherwise generate grid
  // with the size
  if (gridSize > 100 || gridSize < 1) {
    alert("Error: Grid size must be between 1 and 100!");
  } else {
    generateGrid(gridSize);
  }
});
