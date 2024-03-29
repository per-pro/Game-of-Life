import './global'

export default class Cell {
    
    constructor (context, gridX, gridY) {
        this.context = context;
        this.gridX = gridX;
        this.gridY = gridY;

        this.on = Math.random() > 0.5;
    }
    draw() {
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
        this.context.fillRect(this.gridX * window.width,
                              this.gridY * window.height,
                              window.width, window.height);
    }
}