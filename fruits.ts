class Fruit {
	x: number;
	y: number;

	constructor() {
		this.x = 0;
		this.y = 0;
	}

	updateCoords() {
		this.x = Math.floor((Math.random() * rows - 1) * scale);
		this.y = Math.floor((Math.random() * columns - 1) * scale);
	}

	draw() {
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, scale, scale);
	}
}
