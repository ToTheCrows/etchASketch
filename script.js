const container = document.getElementById('container');

createGrid();

function createGrid() {

    for (let count = 0; count < 16; count++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        console.log('grid created');
    }
    const linebreak = document.createElement('/br');

}