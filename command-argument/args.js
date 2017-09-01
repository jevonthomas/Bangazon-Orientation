#!/usr/bin/env node

let myArg = process.argv[2];
// capture multiple args, no matter how many, using destructuring assignment
let [,, ...myArgs] = process.argv;

console.log(process.argv[2]);