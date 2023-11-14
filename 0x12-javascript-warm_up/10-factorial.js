#!/usr/bin/node
// Define the function factorial with one parameter
function computeFactorial (n) {
  if (isNaN(n)) {
    return 1;
  }
// Base case: factorial of NaN is 1
  if (n <= 1) {
    return 1;
  }
// Base case: factorial of 0 is 1
  return n * computeFactorial(n - 1);
}
// Recursive case: compute factorial
const input = Number(process.argv[2]);
const factorial = computeFactorial(input);

console.log(`${factorial}`);
