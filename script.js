
const container = document.querySelector(".gridContainer");
const resetter = document.querySelector ('.resetter');
let xAmount;

resetter.addEventListener('click', function(e){
    clearGrid();
    do {
        xAmount = prompt("Enter X, get X by X grid");
    }
    while ((xAmount > 25))
    makeGrid();
});

function clearGrid(){
    console.log(xAmount);
    for (let i = 0; i < xAmount; i++){
        const height = document.querySelector(".height");
        for (let j = 0; j < xAmount; j++){
            const coordinate = document.querySelector('.coord');
            height.removeChild(coordinate);
        };
        container.removeChild(height);
    }
    return;
}

let colorAmount = 0.4;
function makeGrid(){
    for (let i = 0; i < xAmount; i++){
        const height = document.createElement('div');
        height.setAttribute("class", "height");
        height.style.display = 'flex';
        container.appendChild(height);
        
        for (let j = 0; j < xAmount; j++){
            const coordinate = document.createElement('div');

            coordinate.setAttribute("class", "coord");
            coordinate.style.height = `${500 / xAmount}px`;
            coordinate.style.width = `${500 / xAmount}px`;

            height.appendChild(coordinate);
            coordinate.style.opacity = colorAmount;




        }
    }

    const coordinate = document.querySelectorAll('.coord')

    coordinate.forEach(e => e.addEventListener('mouseover', () => {
        e.style.backgroundColor = `black`;
        e.style.opacity = 1
    }));
/*


    function coloringOver(e){
        coordinate.style.backgroundColor = `black`;
        coordinate.style.opacity = parseFloat(coordinate.style.opacity) + 0.1;
    }


    */
}


