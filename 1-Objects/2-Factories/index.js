// JavaScript is designed on a simple object-based paradigm. 
// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method. 

// Factories function
function createCircle(radius) {

    return {
        radius,
        draw: function() {
            console.log('draw with radius:', radius);
        }
    };

}

const circle1 = createCircle(1);
circle1.draw();

const circle2 = createCircle(2);
circle2.draw();