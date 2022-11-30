
const container = document.querySelector(".gridContainer");
const resetter = document.querySelector ('button');
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

            coordinate.addEventListener('mouseover', () => {

                coordinate.style.backgroundColor ="lightblue";

            });

        }
    }
}


