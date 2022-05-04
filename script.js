


function populateBoard(size) { //creates the grid 
    let board = document.querySelector(".board"); //reference to board container div
    let squares = board.querySelectorAll("div") 
    squares.forEach((div) => div.remove()); //resets board for new size input
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`; //creates x amount of columns, each one will have width of 1/16th 
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size; //is total amount of squares within grid
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div"); //creates square
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square); //adds squares to board
    }
}

populateBoard(16); //runs by default. if omitted,  nothing happens until new input is entered

function changeSize(input) {
    if(input >=2 && input <= 100) {
        populateBoard(input);
    } else {
        console.log("too many squares");
    }
}

function colorSquare() {
    this.style.backgroundColor = 'black';
}