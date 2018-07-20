var APoint = /** @class */ (function () {
    function APoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    APoint.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(APoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less then 0.');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return APoint;
}());
var apoint = new APoint(1, 2);
var x = apoint.x;
apoint.x = 10;
apoint.draw();
