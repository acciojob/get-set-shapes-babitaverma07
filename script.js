class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    getArea() {
        return this._width * this._height;
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Since a square has equal sides, both width and height are set to side
    }
    getPerimeter() {
        return 4  this.width; // Perimeter of a square: 4  side
    }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;