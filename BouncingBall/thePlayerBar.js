const DEFAULT_BAR_WIDTH = 100;
const DEFAULT_BAR_HEIGHT = 10;
const DEFAULT_CANVAS_WIDTH = 500;
const DEFAULT_CANVAS_HEIGHT = 500;
const DEFAULT_SPEED = 10;


function PlayerBar() {
    this.x = DEFAULT_CANVAS_WIDTH/2;
    this.y = DEFAULT_CANVAS_HEIGHT - DEFAULT_BAR_HEIGHT;
    this.width = DEFAULT_BAR_WIDTH;
    this.height = DEFAULT_BAR_HEIGHT;
    this.speed = DEFAULT_SPEED;

    this.show = function (ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    this.move = function () {

    }
}

