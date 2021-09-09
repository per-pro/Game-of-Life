import Cell from './cell'
import './global'

export default class World {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.entities = [];
        this.generation = 0;
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

    // incrementGeneration() {
    //     this.generation += 1;
    // }

    loop() {
        this.checkNeighborhood();

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw();
        };

        // this.incrementGeneration();
        // console.log(this.generation);

        //check if system is stable: compare state configuration between any given state and the one after a successor generation
        //if yes, stop incrementing generation and display number until stable

        setTimeout( () => {
            window.requestAnimationFrame(() => this.loop())
        }, 100);
    }

}