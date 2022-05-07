let color = "black";
let click = true;


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
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex';
    }
}

function colorSquare() {
    if(click) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board"); 
    let squares = board.querySelectorAll("div") 
    squares.forEach((div) => div.style.backgroundColor = 'white'); 
}

document.querySelector('body').addEventListener('click', (e) => {// coloring mode function
    if(e.target.tagName != 'BUTTON') { //Now clicking a button will not effect coloring mode
        click = !click; //re-assign value of click to be false
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Coloring"
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring"
        }
    }
})