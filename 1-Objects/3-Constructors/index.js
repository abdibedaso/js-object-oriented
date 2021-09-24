// JavaScript is designed on a simple object-based paradigm. 
// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method. 

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw with radius:', this.radius);
    };
}

const circle = new Circle(1);
circle.draw();
// new - will create a new object
// sets this to point to that object
// return that object from that function