function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw with radius:', this.radius);
    };
}

const circle = new Circle(1);

for (let key in circle) {
    console.log(key, circle[key]); // radius 1  //draw [Function (anonymous)]
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]); // radius 1
}

const keys = Object.keys(circle);
console.log(keys); // [ 'radius', 'draw' ]

if ('radius' in circle)
    console.log('Circle has a radius.'); // Circle has a radius.