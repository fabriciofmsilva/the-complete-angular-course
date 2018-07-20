class YPoint {
  x: number;
  y: number;

  constructor(x?:number , y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let ypoint = new YPoint(1, 2);
ypoint.draw();
