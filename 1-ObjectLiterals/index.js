// JavaScript is designed on a simple object-based paradigm. 
// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method. 

// Object Literal
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw circle1');
    }
};

circle1.draw();

const circle2 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw circle2');
    }
};

circle2.draw();