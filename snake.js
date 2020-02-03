function Snake() {
    this.x = 0;
    this.y = 0;

    this.move = function() {
        if (this.x > CANVAS.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = CANVAS.width;
        } else if (this.y > CANVAS.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = CANVAS.height;
        }
    };

    this.draw = function() {
        ctx.fillStyle = "yellow";

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.updateDirection = function() {
        switch(direction) {
            case "Up":
                this.y -= scale;
                break;
            case "Down":
                this.y += scale;
                break;
            case "Left":
                this.x -= scale;
                break;
            case "Right":
                this.x += scale;
                break;
        }
    }
}