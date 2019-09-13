export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.canvasWidth = dimensions.width;
    this.canvasHeight = dimensions.height;
    this.xPos = this.canvasWidth / 3;
    this.yPos = this.canvasHeight / 2;
  }

  drawBird(context) {
    context.fillStyle = 'yellow';
    context.fillRect(this.xPos, this.yPos, 40, 30);
  }

  animate(context) {
    this.drawBird(context);
  }
  
}

