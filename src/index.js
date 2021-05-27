import World from './world'

var selectedColor = ''

window.onload = () => {
    let world = new World('canvas', 
    'width',
    'height',
    'rows',
    'cols',
    'color');
    let colorInput = document.getElementById('color');
    colorInput.addEventListener('click', (e) => {
        // switch statement
        switch()
    });
    let columnInput = document.getElementById('column');
    columnInput.addEventListener('click', (e) => {
        // switch statement
    });
    let rowInput = document.getElementById('row');
    rowInput.addEventListener('click', (e) => {
        // switch statement
    });
    let widthInput = document.getElementById('width');
    widthInput.addEventListener('click', (e) => {
        // switch statement
    });
    let heightInput = document.getElementById('height');
    heightInput.addEventListener('click', (e) => {
        // switch statement
    });
    world.makeGrid();
}

//play button
//default?