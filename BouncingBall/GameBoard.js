let ctx = document.getElementById("gameCanvas").getContext("2d");

let bar = new PlayerBar();
let ball = new Ball();
let controller = new Controller();

bar.show(ctx);

function loop() {

    if (controller.left) {
        bar.x -= bar.speed;
    }

    if (controller.right) {
        bar.x += bar.speed;
    }

    bar.show(ctx);
    ball.show(ctx);

    window.requestAnimationFrame(function () {
        ctx.clearRect(0,0, DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT);
        loop();
        ball.bouncing(bar);
    })
}

window.addEventListener("keydown", function () {
    controller.keyListener(event);
});
window.addEventListener("keyup", function () {
    controller.keyListener(event);
});

window.requestAnimationFrame(function () {
    ctx.clearRect(0,0, DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT);
    ball.bouncing(bar);
    loop();
});
