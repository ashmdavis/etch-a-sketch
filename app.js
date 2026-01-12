// create a page with 16x16 grid of square divs
const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

let gridSize = 16;

// ask user for a integer number between 1 and 100
function getGridSize(defaultSize = 16) {
    let num = Number(prompt("Enter a number between 1 - 100:", defaultSize));
    if (!(Number.isInteger(num) && num >= 1 && num <= 100)) {
        num = Number(prompt("Invalid number. Please enter a number beteen 1 - 100:"));
    } else {
        return num;
    }
}

function createGrid(gridSize) {
    let squareWidth = 700 / gridSize;
    // replace old drid with newly made grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // create an empty row of divs specifid by grid size
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");

        gridRow.textContent = "";
        container.appendChild(gridRow);

        // create a colomn of divs under each empty div in the row of the same gidSize number
        for (let j = 0; j < (gridSize); j++) {
            const gridCol = document.createElement("div");
            gridCol.classList.add("gridCol");
            gridCol.id = "gridSquare";
            gridRow.appendChild(gridCol);
            gridCol.style.width = `${squareWidth}px`
            gridCol.style.height = `${squareWidth}px`
        }
    }
    gridDraw();
}
createGrid(gridSize);

function gridDraw() {
    const gridSquare = document.querySelectorAll("#gridSquare");

    gridSquare.forEach(square => {
        square.addEventListener("mouseover", (event) => {
            let selectedSquare = event.target;
            let opacity = Number(selectedSquare.style.opacity);
            if (opacity < 1) {
                selectedSquare.style.backgroundColor = "black";
                selectedSquare.style.opacity = opacity + 0.1;
            }
        });
    });
}

const gridSizeButton = document.createElement("button");
buttons.appendChild(gridSizeButton);
gridSizeButton.textContent = "Grid Size";
gridSizeButton.id = "gridSizeButton";

gridSizeButton.addEventListener("click", function () {
    gridSize = getGridSize();
    createGrid(gridSize);
});
