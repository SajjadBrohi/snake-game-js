const CANVAS = document.querySelector("canvas");
const SCORE = document.querySelector(".score");

let ctx = CANVAS.getContext("2d");
let scale = 20;
let rows = CANVAS.width / scale;
let columns = CANVAS.height / scale;
let direction = "Right";

(function setup() {
    let snake = new Snake();
    let fruit = new Fruit();
    fruit.updateCoords();

    setInterval(
        () => {
            ctx.clearRect(0, 0, CANVAS.height, CANVAS.width);
            fruit.draw();

            snake.draw();
            snake.move();
            snake.updateDirection();
            snake.checkCollision();

            SCORE.innerText = snake.totalScore;

            if ((snake.x < fruit.x + scale) &&
                (snake.x + scale > fruit.x) &&
                (snake.y < fruit.y + scale) &&
                (snake.y + scale > fruit.y)) {
                    fruit.updateCoords();
                    snake.totalScore += 1;
            }
        }, 100
    )
})();

addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key == "ArrowUp" && direction != "Down") {
        direction = e.key.replace("Arrow", "");
    } else if (e.key == "ArrowDown" && direction != "Up") {
        direction = e.key.replace("Arrow", "");
    } else if (e.key == "ArrowLeft" && direction != "Right") {
        direction = e.key.replace("Arrow", "");
    } else if (e.key == "ArrowRight" && direction != "Left") {
        direction = e.key.replace("Arrow", "");
    }
}, false)
