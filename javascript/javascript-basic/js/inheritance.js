//Object.create method 1
//Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log(rect instanceof Rectangle); // true.
console.log(rect instanceof Shape); // true.

rect.move(1, 1); // Outputs, "Shape moved."

//Object.create method 2

function Shape() {
    this.x = 0;
    this.y = 0;
}

//Object.create
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

var rect = Object.create(new Shape());
console.log(rect instanceof Shape); // true.
rect.move(1,1);
