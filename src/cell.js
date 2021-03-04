export default class Cell {
    static width = 10;
    static height = 10;

    constructor (context, gridX, gridY) {
        this.context = context;
        this.gridX = gridX;
        this.gridY = gridY;

        this.on = Math.random() > 0.5;
    }

    draw() {
        this.context.fillStyle = this.on ? '#ff8080' : '#303030';
        this.context.fillRect(this.gridX * Cell.width,
                              this.gridY * Cell.height,
                              Cell.width, Cell.height);
        // this.context.fillRect(this.gridX * document.getElementById("cell-width"),
        //                       this.gridY * document.getElementById("cell-height"),
        //                       document.getElementById("cell-width"),
        //                       document.getElementById("cell-height"));
    }
}