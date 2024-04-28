// Get the div for the grid
const grid = document.querySelector("#container");

// Function to fill square
const fill = (e) => {
    e.target.classList.add("active");
}

const changeSize = () => {
    let size = prompt("Please enter a number between 1 and 100. For example, inputting \'9\' will create a 9x9 grid.", "");
    if (size === null)
        return;
    
    size = parseInt(size);
    
    if (Number.isInteger(size) && (size > 0 && size <= 100))
        createGrid(size);
    else
        changeSize();
}

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

// Make button prompt grid size change
const sizeButton = document.querySelector("#sizeChanger");
sizeButton.addEventListener("click", changeSize);

createGrid(16);