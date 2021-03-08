import Cell from './cell'

export default class World {
    static numColumns = 100;
    static numRows = 100;

    constructor(canvasId, width, height, rows, cols, color) {
        this.canvas = document.getElementById(canvasId);
        this.width = width
        this.height = height
        this.rows = rows
        this.cols = cols
        this.color = color
        console.log(this.color)


        this.context = this.canvas.getContext('2d');
        this.entities = [];
        this.makeGrid();
        window.requestAnimationFrame(() => this.loop());
    }

    makeGrid() {
        for (let y = 0; y < World.numRows; y++) {
            for (let x = 0; x < World.numColumns; x++) {
                this.entities.push(new Cell(this.context, x, y));
            }
        }
    }

    isOn(x, y) {
        if (x < 0 || x >= World.numColumns 
            || y < 0 || y >= World.numRows)  {
            return false;
        }

        return this.entities[this.gridToIndex(x, y)].on ? 1 : 0;
    }

    gridToIndex(x, y) {
        return x + (y * World.numColumns);
    }
    
    checkNeighborhood() {
        for (let x = 0; x < World.numColumns; x++) {
            for (let y = 0; y < World.numRows; y++) {
                let numOn = this.isOn(x - 1, y - 1) + 
                            this.isOn(x, y - 1) +
                            this.isOn(x + 1, y - 1) +
                            this.isOn(x - 1, y) +
                            this.isOn(x + 1, y) +
                            this.isOn(x - 1, y + 1) +
                            this.isOn(x, y + 1) +
                            this.isOn(x + 1, y + 1);
                let index = this.gridToIndex(x, y);

                if (numOn == 2) {
                    this.entities[index].nextOn = this.entities[index].on;
                }else if (numOn == 3){
                    this.entities[index].nextOn = true;
                }else{
                    this.entities[index].nextOn = false;
                }
            }
        }

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].on = this.entities[i].nextOn;
        }
    }

    loop() {
        this.checkNeighborhood();

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw();
        };

        setTimeout( () => {
            window.requestAnimationFrame(() => this.loop())
        }, 100);
    }

}