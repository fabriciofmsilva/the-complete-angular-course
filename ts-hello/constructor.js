var YPoint = /** @class */ (function () {
    function YPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    YPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return YPoint;
}());
var ypoint = new YPoint(1, 2);
ypoint.draw();
