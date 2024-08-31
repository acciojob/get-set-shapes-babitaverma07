// Define the Rectangle class
class Rectangle {
    // Private properties for width and height
    private _width: number;
    private _height: number;

    // Constructor to initialize width and height
    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width(): number {
        return this._width;
    }

    // Getter for height
    get height(): number {
        return this._height;
    }

    // Method to calculate the area
    getArea(): number {
        return this._width * this._height;
    }
}

// Define the Square class that extends Rectangle
class Square extends Rectangle {
    // Constructor to initialize the side of the square
    constructor(side: number) {
        // Call the parent constructor with side as both width and height
        super(side, side);
    }

    // Method to calculate the perimeter of the square
    getPerimeter(): number {
        return 4 * this.width; // Since width and height are the same for a square
    }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);       // Output: 5
console.log(rectangle.height);      // Output: 10
console.log(rectangle.getArea());   // Output: 50

const square = new Square(7);
console.log(square.width);          // Output: 7
console.log(square.height);         // Output: 7
console.log(square.getArea());      // Output: 49
console.log(square.getPerimeter()); // Output: 28
