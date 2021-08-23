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
        this.context.fillStyle = this.on ? 'red' : '#303030';
        //'coral' : '#FF7F50'
        //'mint' : '#98FF98'
        //'peach' : '#FFDAB9'
        //'tide' : '#B7B4AD'
        //'Oslo Gray' : '#8E9096'
        //'Smoke' : '#848884'
        this.context.fillRect(this.gridX * Cell.width,
                              this.gridY * Cell.height,
                              Cell.width, Cell.height);
    }
}