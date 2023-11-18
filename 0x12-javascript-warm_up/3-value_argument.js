#!/usr/bin/node
// Printing the first argument or "No argument" if none is provided
const args = process.argv[2];

if (args === undefined) {
  console.log('No argument');
} else {
  console.log(args);
}
