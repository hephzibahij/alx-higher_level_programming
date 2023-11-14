#!/usr/bin/node
// Define the function findSecondBiggest with variable number of arguments
// Convert all arguments to integers
// If no argument passed or only one argument, print 0
// Sort the array of integers in descending order
// Find and print the second biggest integer
function SecondBiggest (args) {
  const integers = args.map(Number).filter(Number.isInteger);

  if (integers.length < 2) {
    console.log(0);
  } else {
    const sortedIntegers = integers.sort((a, b) => b - a);
    console.log(sortedIntegers[1]);
  }
}

const argumentsList = process.argv.slice(2);
SecondBiggest(argumentsList);
