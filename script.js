//complete this code
class Rectangle {}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class extending Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the constructor of Rectangle with side as both width and height
    super(side, side);
    this._side = side;
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._side;
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);      // Output: 5
console.log(rectangle.height);     // Output: 10
console.log(rectangle.getArea());  // Output: 50

const square = new Square(7);
console.log(square.width);         // Output: 7
console.log(square.height);        // Output: 7
console.log(square.getArea());     // Output: 49
console.log(square.getPerimeter());// Output: 28
