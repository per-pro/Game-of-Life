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
        // console.log(window.selectedColor)
        switch (window.selectedColor) {
            case "Warm":
                this.context.fillStyle = this.on ? '#FFDAB9' : '#0B6623';
                break
            case "Dark":
                this.context.fillStyle = this.on ? '#B7B4AD' : '#8E9096';
                break
            case "Light":
                this.context.fillStyle = this.on ? '#FF7F50' : '#848884';
                break
            default:
                this.context.fillStyle = this.on ? 'red' : 'black';
                break
        }
        //'forest' - 0B6623
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