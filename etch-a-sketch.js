// Get the div for the grid
const grid = document.querySelector("#container");

// Create grid
for (let rows = 0; rows < 16; rows++) {
    const row = document.createElement("div");
    row.classList.add("row")
    grid.appendChild(row);

    for (let squares = 0; squares < 16; squares++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
}