const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
function random(min,max) {
    return Math.floor(Math.random()*(max-min)) + min;
}
function randomColor() {
    return 'rgb(' +
        random(0, 255) + ', ' +
        random(0, 255) + ', ' +
        random(0, 255) + ')';
}
//水平和竖直速度（velX 和 velY） size —— 小球的半径
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}
// let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
// testBall.draw();
//函数的前四个部分用来检查小球是否碰到画布的边缘。如果碰到，我们反转小球的速度方向来让它向反方向移动。
//将 velX 的值加到 x 的坐标上，将 velY 的值加到 y 坐标上 —— 每次调用这个方法的时候小球就移动这么多。
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }
Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j]) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = randomColor();
        }
        }
    }
}
let balls = [];
while (balls.length < 30) {
    let size = random(15,20);
    let ball = new Ball(
      // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-3, 3),
      random(-3, 3),
      randomColor(),
      size
    );
    balls.push(ball);
  }
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';//在下一个视图画出来时用来遮住之前的视图的
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);//使用 requestAnimationFrame() 方法再运行一次函数 
}
loop();

