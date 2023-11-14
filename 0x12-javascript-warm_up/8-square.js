#!/usr/bin/node
// Accessing the first argument from the command line
const arg = process.argv[2];

// Attempting to convert the argument to an integer
const size = parseInt(arg);

// Checking if the conversion was successful and printing the result
if (isNaN(size)) {
    console.log('Missing size');
} else {
    // Loop to print a square of size x
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
