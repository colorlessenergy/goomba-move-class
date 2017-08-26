var coin,
    coinImage,
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
      numberOfFrames = options.numberOfFrames || 0;

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;

  that.update = function () {
    tickCount += 1;

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
    that.context.clearRect(0, 0, that.width, that.height);

    that.context.drawImage(
      that.image,
      frameIndex * that.width / numberOfFrames,
      0,
      that.width / numberOfFrames,
      that.height,
      0,
      0,
      that.width / numberOfFrames,
      that.height);
  }
  return that;
}

canvas = document.getElementById("coinAnimation");
canvas.width = 100;
canvas.height = 100;

coinImage = new Image();

coin = sprite({
  context: canvas.getContext("2d"),
  width: 1000,
  height: 100,
  image: coinImage,
  numberOfFrames: 10,
  ticksPerFrame: 4
})

coinImage.addEventListener("load", gameLoop);
coinImage.src = "images/coin-sprite-animation.png";
