// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(num1, num2, callback) {
  callback(num1, num2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

//sum of two numbers
function add(first, second) {
  console.log(first + second);
}
consume(2, 5, add);

//product of two numbers
function multiply(first, second) {
  console.log(first*second);
}
consume(2, 5, multiply);

//returns greeting
function greeting(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}, nice to meet you!`)
}
consume('Will', 'Umstead', greeting);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: when nestedFunction was created, the all variables that are in the current scope become enclosed within nestedFunction.
// These variables include: 'internal' which is nested inside myFunction, and obviously, 'external' is accessible because it is in the
// global scope.
// To sum it up, when a function is declared, it contains: a function defintion and a closure.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();