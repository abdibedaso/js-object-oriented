let x = {};
// let x = new Object();

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// Factories function
function createCircle(radius) { return { radius }; }
const circle = createCircle(1);
console.log(circle.constructor); // [Function: Object]


// Constructor function
function Circle(radius) { this.radius = radius; }
const another = new Circle(2); // Circle.call({}, 1); // Circle.apply({}, [1]);
console.log(another.constructor); // [Function: Circle]


//Functions Are Objects
const AnotherCircle = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('draw');
}
`);
const anotherCircle = new AnotherCircle(1);
console.log(anotherCircle.constructor); // [Function: anonymous]