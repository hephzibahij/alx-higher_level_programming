#!/usr/bin/node
// Accessing the first argument from the command line
// Attempting to convert the argument to an integer
// Checking if the conversion was successful and printing the result
const numOccurrences = Number(process.argv[2]);

if (!isNaN(numOccurrences) && Number.isInteger(numOccurrences)) {
  for (let i = 0; i < numOccurrences; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
