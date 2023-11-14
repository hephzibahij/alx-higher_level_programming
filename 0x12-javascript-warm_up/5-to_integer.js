#!/usr/bin/node
// Accessing the first argument from the command line
const arg = process.argv[2];

// Attempting to convert the argument to an integer
const intValue = parseInt(arg);

// Checking if the conversion was successful and printing the result
console.log(isNaN(intValue) ? 'Not a number' : `My number: ${intValue}`);
