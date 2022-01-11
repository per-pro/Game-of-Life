import World from './world'
import './global'

window.onload = () => {
    let world = new World('canvas', 
    'width',
    'height',
    'rows',
    'cols',
    'color');
    let colorInput = document.getElementById('color');
    colorInput.addEventListener('change', (e) => {
        switch(e.currentTarget.value) {
            case "Cold":
                window.selectedColor = "Cold";
                return
            case "Warm":
                window.selectedColor = "Warm";
                return
            case "Dark":
                window.selectedColor = "Dark";
                return
            case "Light":
                window.selectedColor = "Light";
                return
        };
    });
    let columnInput = document.getElementById('column');
    columnInput.addEventListener('click', (e) => {
    });
    let rowInput = document.getElementById('row');
    rowInput.addEventListener('click', (e) => {
    });
    let widthInput = document.getElementById('width');
    widthInput.addEventListener('click', (e) => {
    });
    let heightInput = document.getElementById('height');
    heightInput.addEventListener('click', (e) => {
    });
    world.makeGrid();
}
//steady state
//column + row
//play button
//styling
//custom color
//variants