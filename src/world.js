import Cell from './cell'
import './global'

export default class World {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.entities = [];
        this.stateArray = [];
        this.numMoves = 0;
        this.makeGrid();
        window.requestAnimationFrame(() => this.loop());
    }

    makeGrid() {
        for (let y = 0; y < window.numRows; y++) {
            for (let x = 0; x < window.numColumns; x++) {
                this.entities.push(new Cell(this.context, x, y));
            }
        }
    }

    isOn(x, y) {
        if (x < 0 || x >= window.numColumns 
            || y < 0 || y >= window.numRows)  {
            return false;
        }

        return this.entities[this.gridToIndex(x, y)].on ? 1 : 0;
    }

    gridToIndex(x, y) {
        return x + (y * window.numColumns);
    }
    
    checkNeighborhood() {
        for (let x = 0; x < window.numColumns; x++) {
            for (let y = 0; y < window.numRows; y++) {
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

    incrementNumMoves() {
        window.numMoves += 1;
    }

    isStable(array) {
        const equals = (a, b) =>
                a.length === b.length &&
                a.every((v, i) => v === b[i]);
        if (array.length > 3) {
            //the issue is that its retroactively changing the elements - when compare first element of first round with later rounds it changes
            //diagnosed the problem, it's a memory location issue
            if (equals(array[array.length - 1], array[array.length - 3])) {
                return true
            } else {
                return false}
        } else {
            return false
        }
    }

    loop() {
        this.checkNeighborhood();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw();
        };
        //with object im not getting a false positive but its also not showing when it is actually true
        let state = new Object();
        state[this.numMoves] = [...this.entities];
        console.log(this.isStable(state))
        this.incrementNumMoves();
        setTimeout( () => {
            window.requestAnimationFrame(() => this.loop())
        }, 100);
    }
}