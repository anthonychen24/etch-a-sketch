const gridContainer = document.querySelector('.grid-container');
const gridBtn = document.querySelector('button')

let gridSize = 16; // Default 16x16 grid, change this value to adjust the grid size

// Function to create the grid
function createGrid(size) {
    gridContainer.textContent = ''; // Clear existing grid, if any
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
    // Dynamically adjust grid item size based on the new grid size
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.width = `${100 / size}%`;
        item.style.height = `${100 / size}%`;
    });
 
}

// Initial grid creation
createGrid(gridSize);

// Function to resize the grid
function resizeGrid() {
    let newSize = Math.round(+prompt('Enter new grid size', ''));

    if (newSize === 0) {
        return gridSize;
    }
    else if (!isNaN(newSize) && newSize >= 1 && newSize <= 100){
        gridSize = newSize;
        createGrid(gridSize);
    }else if (isNaN(newSize)) {
        alert('Invalid input. Please enter a number from 1 to 100.');
        resizeGrid();
    }else if (newSize < 1 || newSize > 100) {
        alert('Invalid input. Please enter a number from 1 to 100.');
        resizeGrid();
    }
}



// Add event listeners for drawing functionality
gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = 'black';
    }
});

// Add event listener for resizing
gridBtn.addEventListener('click', (e) => {
    resizeGrid();
})