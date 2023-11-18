#!/usr/bin/node
// Define the function executeXTimes with two parameters
exports.callMeMoby = (x, theFunction) => {
  // Loop x times and execute the provided function
  for (let i = 0; i < x; i++) {
    theFunction();
  }
};
