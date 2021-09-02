import './global'

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
        debugger
        switch (window.selectedColor) {
            case "Warm":
                this.context.fillStyle = this.on ? 'peach' : 'mint';
            case "Dark":
                this.context.fillStyle = this.on ? 'tide' : 'oslo gray';
            case "Light":
                this.context.fillStyle = this.on ? 'coral' : 'smoke';
            default:
                this.context.fillStyle = this.on ? 'red' : 'black';
        }
        //'mint' - '#98FF98'
        //'peach' - '#FFDAB9'
        //'tide' - '#B7B4AD'
        //'Oslo Gray' - '#8E9096'
        //'coral' - '#FF7F50'
        //'Smoke' - '#848884'
        this.context.fillRect(this.gridX * Cell.width,
                              this.gridY * Cell.height,
                              Cell.width, Cell.height);
    }
}