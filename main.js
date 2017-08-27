var coin,
    goomba,
    canvas;

function gameLoop() {

   window.requestAnimationFrame(gameLoop);
   coin.update();

   coin.render();


 }


function sprite (options) {
  var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame,
      numberOfFrames = options.numberOfFrames || 0,
      vel = {x: 0, y: 0}

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;

  that.update = function () {
    tickCount += 1;
    vel.x++;

    if (vel.x + that.width > canvas.width) {
      vel.x = 0;
    }

    if (tickCount > ticksPerFrame) {
      tickCount = 0;

      if (frameIndex < numberOfFrames - 1) {
        frameIndex += 1;
      } else {
        frameIndex = 0;
      }
    }
  };

  that.render = function () {

    that.context.clearRect(0, 0, canvas.width, canvas.height);

    that.context.drawImage(
      that.image,
      frameIndex * that.width / numberOfFrames,
      374,
      that.width / numberOfFrames,
      that.height,
      vel.x,
      0,
      that.width / numberOfFrames,
      that.height);
  }
  return that;
}

canvas = document.getElementById("goomba");
canvas.width = 500;
canvas.height = 100;

goomba = new Image();

coin = sprite({
  context: canvas.getContext("2d"),
  width: 70,
  height: 32,
  image: goomba,
  numberOfFrames: 2,
  ticksPerFrame: 4
})

goomba.addEventListener("load", gameLoop);
goomba.src = "images/sheet.png";
