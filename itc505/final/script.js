
let count=0;

document.addEventListener("DOMContentLoaded", function () {
    
    const gridSize = 5;
    const gameContainer = document.getElementById("game-container");

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", toggleCell);
            gameContainer.appendChild(cell);
        }
    }

    function toggleCell() {

        increaseCount()

        const row = parseInt(this.dataset.row);
        const col = parseInt(this.dataset.col);

        this.classList.toggle("active");

        toggleAdjacentCell(row - 1, col); // Top
        toggleAdjacentCell(row + 1, col); // Bottom
        toggleAdjacentCell(row, col - 1); // Left
        toggleAdjacentCell(row, col + 1); // Right
    }

    function toggleAdjacentCell(row, col) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.toggle("active");
        }
    }
});

function increaseCount(){

    console.log(count);
    count=count+1
    document.getElementById("count").innerHTML=`Counter: ${count}`

}


