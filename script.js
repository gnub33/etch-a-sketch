
let color = 'black';

//detects mouse state
let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
}
document.body.onmouseup = () => {
    mouseDown = false;
}


function populateDefaultBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=>div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size*size;
    for(let i=0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.border = 'black solid .5px';
        square.addEventListener('mousedown', draw)
        square.addEventListener('mouseover', drag)
        board.insertAdjacentElement('afterbegin', square);
    }
 
}

populateDefaultBoard(16)


function rangeSliderValue(value) {

    function populateBoard() {
        let size = parseInt(value);
        //console.log(value)
        let board = document.querySelector('.board');
        let squares = board.querySelectorAll('div')
        squares.forEach((div)=>div.remove());
        board.style.gridTemplateColumns = `repeat(${size},1fr)`;
        board.style.gridTemplateRows = `repeat(${size},1fr)`;

        let amount = size*size;
        for(let i=0; i < amount; i++) {
            let square = document.createElement('div');
            square.style.border = 'black solid .5px';
            square.addEventListener('mousedown', draw)
            square.addEventListener('mouseover', drag)

            board.insertAdjacentElement('afterbegin', square);
        }

        let gridSizeDisplay = document.getElementById('grid-size-display');
        gridSizeDisplay.innerHTML = `grid size: ${size}x${size}`;
     
    }
    //clearBoard()
    populateBoard();

}


function draw() {
    //basic pen function
    this.style.backgroundColor = color;
}

//eraser tool
let eraser = document.querySelector('.eraser-btn');
eraser.addEventListener('click', eraserTool);
function eraserTool() {
    color = 'white';
}

//choose a color to draw with
let colorButton = document.querySelector('#color-btn')
colorButton.addEventListener('change', chooseColor)
function chooseColor() {
    color = this.value
}

function drag() {
    //when mouse is down
    if(mouseDown){
        this.style.backgroundColor = color;
    } else{
        //do nothing
    }
}

//turns all square back to white
function clearBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=>div.style.backgroundColor='white');
}
let clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearBoard)

//turns off grid lines
function gridLinesToggle() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    //fire fox uses 'medium none'??
    if(squares[0].style.border=='medium none' || squares[0].style.border=='none') { 
        squares.forEach((div)=>div.style.border='black solid .5px');
    }else {
        squares.forEach((div)=>div.style.border='none');
    }
    
};
let gridButton = document.querySelector('.grid-lines-btn');
gridButton.addEventListener('click', gridLinesToggle);


