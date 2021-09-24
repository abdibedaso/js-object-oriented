function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw with radius:', this.radius);
    };
}

const circle = new Circle(1);

circle.location = { x: 1 };

const propertyName = 'center-location';
circle[propertyName] = { x: 1 };

delete circle.draw;