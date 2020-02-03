function Snake() {
    this.x = 0;
    this.y = 0;
    this.totalScore = 0;
    this.tail = [];

    this.move = function () {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
        }

        this.tail[this.totalScore - 1] = {
            x: this.x,
            y: this.y
        };

        if (this.x + scale > CANVAS.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = CANVAS.width;
        } else if (this.y + scale > CANVAS.height) {
            this.y = -20;
        } else if (this.y < 0) {
            this.y = CANVAS.height;
        }
    }

    this.draw = function () {
        ctx.fillStyle = "black";

        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);

    }

    this.updateDirection = function () {
        switch (direction) {
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

    this.checkCollision = function () {
        for (let i = 0; i < this.tail.length; i++) {
            if ((this.x == this.tail[i].x) && (this.y == this.tail[i].y)) {
                if (confirm("You lost! Do you want to restart?")) {
                    this.x = 0;
                    this.y = 0;
                    this.tail = [];
                    this.totalScore = 0;
                } else {
                    window.close();
                }
            }
        }
    }
}