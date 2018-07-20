class XPoint {
  x: number;
  y: number;

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  getDistance(another: XPoint) {
    // ...
  }
}

let point = new XPoint();
point.x = 1;
point.y = 2;
point.draw();
