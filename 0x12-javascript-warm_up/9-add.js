#!/usr/bin/node
// Define the function add with two parameters
// Calculate the sum of the two integers
function add (a, b) {
  const result = a + b;
  console.log(result);
}
// Print the result using console.log
add(Number(process.argv[2]), Number(process.argv[3]));
