// Define the student object with a property called name
var student = {
    name: 'John'
};

// Add a method to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
    // Use Object.keys() to get an array of keys in the object
    return Object.keys(this);
};

// Test the getKeys() method
console.log(student.getKeys()); // Output: ['name']
