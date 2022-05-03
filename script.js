


//Color Change function


//Grid Container Set Up

for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < 16; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
            let boxNumber = [i]+[j];
            box.setAttribute('id',boxNumber)
        }                
        document.getElementById('boxParent').appendChild(row);
}


//Add click event listener to change box color

const boxes = document.getElementsByClassName("box"); //returns an array-like object

const changeColor = function() {
    this.style.backgroundColor = "blue"; //turns 'this' element blue
};

const defaultColor = function() {
    this.style.removeProperty("background-color"); //turns 'this' element blue
};

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', changeColor); //iterates through box 'array' adding event to each
    boxes[i].addEventListener('mouseout', defaultColor);
}



