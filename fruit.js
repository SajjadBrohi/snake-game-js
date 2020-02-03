function Fruit() {
    this.x = 0;
    this.y = 0;

    this.updateCoords = function() {
        this.x = Math.floor((Math.random() * rows - 1) * scale);
        this.y = Math.floor((Math.random() * columns - 1) * scale);
        console.log(this.x, this.y)
    }

    this.draw = function() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

}