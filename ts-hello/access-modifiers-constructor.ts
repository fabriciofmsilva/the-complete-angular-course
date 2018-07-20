class WPoint {
  constructor(private x?:number , private y?: number) { }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let wpoint = new WPoint(1, 2);
wpoint.draw();
