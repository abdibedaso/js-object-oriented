// Hide the detail or complexity only expose the essentials
// Hide out the implementation details

function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.draw = function() {
        console.log('draw with radius:', this.radius);
    };

    Object.defineProperty(this, 'defaultLocation', { // To define a getter/setter, use Object.defineProperty():
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });

}

const circle = new Circle(1);
circle.defaultLocation = { x: 1, y: 2 };
console.log(circle.defaultLocation); // { x: 1, y: 2 }