// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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

// Explanation: 

console.log("Closure Task 1: Internal is defined in the function scope above nestedFunction. Functions can reach out and access variables that are defined in a more global scope then their own. This only goes one direction however, so a variable defined inside of a function cannot be accessed by a scope more global than its own. They can reach outward but not inward.")

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let counter = 1
  let sum = 0
  while(counter <= number){
    sum += counter;
    counter += 1;
  }
  return sum;
}

console.log("Closure Task 2:", summation(4))