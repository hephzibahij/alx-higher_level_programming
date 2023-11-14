#!/usr/bin/node
// Printing the first argument or "No argument" if none is provided
const firstArgument = process.argv[2];
console.log(firstArgument ? firstArgument : "No argument");
