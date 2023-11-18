#!/usr/bin/node
// Define the function factorial with one parameter
// Base case: factorial of 0 is 1
// Recursive case: compute factorial
// Base case: factorial of NaN is 1
function computeFactorial (n) {
  if (isNaN(n)) {
    return 1;
  }

  if (n <= 1) {
    return 1;
  }

  return n * computeFactorial(n - 1);
}

const input = Number(process.argv[2]);
const factorial = computeFactorial(input);

console.log(`${factorial}`);
