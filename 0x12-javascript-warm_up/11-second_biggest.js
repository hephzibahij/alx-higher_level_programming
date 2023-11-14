#!/usr/bin/node
// Define the function findSecondBiggest with variable number of arguments
const findSecondBiggest = (...args) => {
  // Convert all arguments to integers
  const integers = args.map(Number);

  // If no argument passed or only one argument, print 0
  if (integers.length <= 1) {
    console.log(0);
    return;
  }

  // Sort the array of integers in descending order
  const sortedIntegers = integers.sort((a, b) => b - a);

  // Find and print the second biggest integer
  console.log("The second biggest integer is:", sortedIntegers[1]);
}
