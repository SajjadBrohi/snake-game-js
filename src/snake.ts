class Snake {
	x: number;
	y: number;
	totalScore: number;
	tail: any[];

	constructor() {
		this.x = 0;
		this.y = 0;
		this.totalScore = 0;
		this.tail = [];
	}

	move(): void {
		for (let i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}

		this.tail[this.totalScore - 1] = {
			x: this.x,
			y: this.y,
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

	draw(): void {
		ctx.fillStyle = 'black';

		for (let i = 0; i < this.tail.length; i++) {
			ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
		}

		ctx.fillRect(this.x, this.y, scale, scale);
	}

	updateDirection(): void {
		switch (direction) {
			case 'Up':
				this.y -= scale;
				break;
			case 'Down':
				this.y += scale;
				break;
			case 'Left':
				this.x -= scale;
				break;
			case 'Right':
				this.x += scale;
				break;
		}
	}

	checkCollision(): void {
		for (let i = 0; i < this.tail.length; i++) {
			if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
				if (confirm('You lost! Do you want to restart?')) {
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
