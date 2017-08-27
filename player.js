canvas = document.getElementById("goomba");
canvas.width = 500;
canvas.height = 100;

goomba = new Image();
goomba.src = "images/sheet.png";


class Player {

  constructor(canvas, sprite, numberOfFrames) {
    this.canvas = canvas;
    this.sprite = sprite;
    this.frameIndex = 0;
    this.vel = {x: 0, y: 0};
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    this.numberOfFrames = numberOfFrames || 0;
    this.context = canvas.getContext("2d");
    this.movement = 0;

    document.addEventListener("keydown", function (event) {
      player.move(event);
    })
  }

  gameLoop() {
    window.requestAnimationFrame(player.gameLoop);

    player.update();
    player.render();
  }

  render() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);

    this.context.drawImage(
      this.sprite,
      this.frameIndex * 70 / this.numberOfFrames,
      374,
      70 / this.numberOfFrames,
      32,
      this.vel.x,
      10,
      70 / this.numberOfFrames,
      32
    );
  }

  update() {
    this.tickCount += 1;

    // if (this.vel.x + 70 > this.canvas.width) {
    //   this.movement = -1;
    // } else if (this.vel.x === 0) {
    //   this.movement = 1;
    // }
    //
    // if (this.movement === -1) {
    //   this.vel.x--
    // } else {
    //   this.vel.x++
    // }

    // if (this.tickCount > this.ticksPerFrame) {
    //   this.tickCount = 0;
    //
    //   if (this.frameIndex < this.numberOfFrames - 1) {
    //     this.frameIndex += 1;
    //   } else {
    //     this.frameIndex = 0;
    //   }
    // }
  }

  move(event) {
    switch (event.keyCode) {
      case 39:
      this.vel.x++
      if (this.frameIndex === 0) {
        this.frameIndex += 1;
      } else if (this.frameIndex === 1) {
        this.frameIndex -= 1;
      }
      break;
      case 37:
      this.vel.x--;
      if (this.frameIndex === 1) {
        this.frameIndex -= 1;
      } else if (this.frameIndex === 0) {
        this.frameIndex += 1;
      }
      break;
    }
  }
}

var player;

goomba.onload = function () {
   player = new Player(canvas, goomba, 2);

   player.gameLoop();
}
