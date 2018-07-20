var XPoint = /** @class */ (function () {
    function XPoint() {
    }
    XPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    XPoint.prototype.getDistance = function (another) {
        // ...
    };
    return XPoint;
}());
var point = new XPoint();
point.x = 1;
point.y = 2;
point.draw();
