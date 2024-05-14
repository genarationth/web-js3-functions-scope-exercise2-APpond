// Exercise 2.1: Expression function for checking if a number is even
const isEven = function(num) {
    return num % 2 === 0;
};

console.log(isEven(2)); // Output: true
console.log(isEven(1)); // Output: false

//Exercise 2.2 converts the function from Exercise 2.1 into an arrow function
const isEvenArrow = (num) => num % 2 === 0;
console.log(isEvenArrow(2)); // Output: true
console.log(isEvenArrow(1)); // Output: false