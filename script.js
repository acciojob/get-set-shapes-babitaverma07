// Rectangle class
class Rectangle {
  /**
   * Constructor method
   * @param {number} width - The width of the rectangle
   * @param {number} height - The height of the rectangle
   */
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  /**
   * Getter method for width
   * @returns {number} The width of the rectangle
   */
  get width() {
    return this._width;
  }

  /**
   * Getter method for height
   * @returns {number} The height of the rectangle
   */
  get height() {
    return this._height;
  }

  /**
   * Method to calculate the area of the rectangle
   * @returns {number} The area of the rectangle
   */
  getArea() {
    return this.width * this.height;
  }
}

// Square class extends Rectangle
class Square extends Rectangle {
  /**
   * Constructor method
   * @param {number} side - The side length of the square
   */
  constructor(side) {
    super(side, side); // Call Rectangle constructor with side as both width and height
  }

  /**
   * Method to calculate the perimeter of the square
   * @returns {number} The perimeter of the square
   */
  getPerimeter() {
    return 4 * this.width; // Since all sides are equal, 4 times the width is the perimeter
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28