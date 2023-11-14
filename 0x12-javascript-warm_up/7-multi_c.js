#!/usr/bin/node
// Accessing the first argument from the command line
const arg = process.argv[2];

// Attempting to convert the argument to an integer
const numOccurrences = parseInt(arg);

// Checking if the conversion was successful and printing the result
if (!isNaN(numOccurrences)) {
    console.log('Missing number of occurrences');
} else {
    // Loop to print "C is fun" x times
    for (let i = 0; i < numOccurrences; i++) {
        console.log('C is fun');
    }
}
