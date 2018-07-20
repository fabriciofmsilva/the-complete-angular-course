var WPoint = /** @class */ (function () {
    function WPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    WPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return WPoint;
}());
var wpoint = new WPoint(1, 2);
wpoint.draw();
