const CANVAS = document.querySelector("canvas");

let ctx = CANVAS.getContext("2d");
let scale = 20;
let rows = CANVAS.width/scale;
let columns = CANVAS.height/scale;
let snake = new Snake();
let fruit  = new Fruit();
fruit.updateCoords();
console.log(fruit.x, fruit.y)
let direction = "Right";



setInterval(
    () => {
        ctx.clearRect(0, 0, CANVAS.height, CANVAS.width);
        fruit.draw();

        snake.draw();
        snake.move();
        snake.updateDirection();

    }, 100
)

addEventListener("keydown", (e) => {
    direction = e.key.replace("Arrow", "");
}, false)