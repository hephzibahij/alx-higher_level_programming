#!/usr/bin/node
// Accessing the first argument from the command line
const size = Number(process.argv[2]);
// Attempting to convert the argument to an integer
// Checking if the conversion was successful and printing the resul
// Loop to print a square of size x
if (!isNaN(size) && Number.isInteger(size)) {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
} else {
  console.log('Missing size');
}
