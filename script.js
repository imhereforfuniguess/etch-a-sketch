
const container = document.querySelector(".gridContainer");



for (let i = 0; i < 16; i++){
    const height = document.createElement('div');
    height.style.display = 'flex';
    container.appendChild(height);
    
    for (let j = 0; j < 16; j++){
        const coordinate = document.createElement('div');
        coordinate.style.height =" 10px";
        coordinate.style.width =" 10px";
        height.appendChild(coordinate);
    }

}