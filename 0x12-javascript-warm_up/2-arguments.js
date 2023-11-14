#!/usr/bin/node
// Checking the number of arguments and printing messages accordingly
const length = process.argv.length - 2;
if (length === 2) {
    console.log('No argument');
} else if(length === 3) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
