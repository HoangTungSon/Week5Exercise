const DEFAULT_BALL_RADIUS = 10;
const DEFAULT_BALL_X = DEFAULT_CANVAS_WIDTH / 2;
const DEFAULT_BALL_Y = DEFAULT_CANVAS_HEIGHT / 2;
const DEFAULT_X_SPEED = 1;
const DEFAULT_Y_SPEED = 1.2;

function Ball() {
    this.x = DEFAULT_BALL_X;
    this.y = DEFAULT_BALL_Y;
    this.r = DEFAULT_BALL_RADIUS;
    this.xSpeed = DEFAULT_X_SPEED;
    this.ySpeed = DEFAULT_Y_SPEED;

    this.show = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fill();
    };

    this.bouncing = function (bar) {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > DEFAULT_CANVAS_WIDTH) {
            this.xSpeed = -this.xSpeed;
        }

        if (this.y < 0) {
            this.ySpeed = -this.ySpeed;
        }

        if (this.y < bar.y && this.y > bar.y - bar.height &&
            this.x > bar.x && this.x < bar.x + bar.width/2) {
            this.xSpeed = -this.xSpeed;
            this.ySpeed = -this.ySpeed*1.5;
        }

        if (this.y < bar.y && this.y > bar.y - bar.height &&
            this.x > bar.x + bar.width/2 && this.x < bar.x + bar.width){
            this.ySpeed = -this.ySpeed*1.5;
        }

        if(this.x === 0){
            this.xSpeed = -this.xSpeed;
        }

        if (this.y > DEFAULT_CANVAS_HEIGHT){
            alert("losing");
            this.x = DEFAULT_BALL_X;
            this.y = DEFAULT_BALL_Y;
            this.ySpeed = DEFAULT_Y_SPEED;

        }
    }
}

