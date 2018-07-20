class ZPoint {
  private x: number;
  private y: number;

  constructor(x?:number , y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let zpoint = new ZPoint(1, 2);
// zpoint.x = 3;
zpoint.draw();
