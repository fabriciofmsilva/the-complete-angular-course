class APoint {
  constructor(private _x?:number , private _y?: number) { }

  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0)
      throw new Error('value cannot be less then 0.');

    this._x = value;
  }
}

let apoint = new APoint(1, 2);
let x = apoint.x;
apoint.x = 10;
apoint.draw();
