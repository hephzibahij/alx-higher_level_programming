#!/usr/bin/node
// Define the function incrementAndCall with two parameters
// Increment the number
// Call the provided function with the incremented number
exports.addMeMaybe = (number, theFunction) => {
  number++;
  theFunction(number);
};
