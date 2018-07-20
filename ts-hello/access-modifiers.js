var ZPoint = /** @class */ (function () {
    function ZPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    ZPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return ZPoint;
}());
var zpoint = new ZPoint(1, 2);
// zpoint.x = 3;
zpoint.draw();
