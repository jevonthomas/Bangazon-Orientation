#!/usr/bin/env node
// David and I worked on this one together.

var myArg2 = process.argv[2];
var myArg3 = process.argv[3];
// console.log(process.argv);
// capture multiple args, no matter how many, using destructuring assignment
let [, , ...myArgs] = process.argv;

if (myArg2 == NaN || myArg2 == undefined) {
  myArg2 = 0;
  if (myArg3 == NaN || myArg3 == undefined) {
    myArg3 = 0;
  }
}

// console.log(myArg2, myArg3);
console.log(parseInt(myArg2) + parseInt(myArg3));
// console.log(myArgs)