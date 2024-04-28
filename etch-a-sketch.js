// Get the div for the grid
const grid = document.querySelector("#container");

// Function to fill square
const fill = (e) => { e.target.classList.add("active"); }

// Create grid
const createGrid = (size) => {
    // Clear the existing grid
    grid.innerHTML = '';
    
    // Calculate the square size
    const squareSize = (480 / size) - 2;

    for (let rows = 0; rows < size; rows++) {
        const row = document.createElement("div");
        row.classList.add("row")
        grid.appendChild(row);

        for (let squares = 0; squares < size; squares++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener("mouseover", fill);
            row.appendChild(square);
        }
    }
}

createGrid(16);