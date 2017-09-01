#!/usr/bin/env node

// *********************************

// Coded along with David B

// ***********************************


const { assert: { equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { roll, toDiceNotation } = require('../lib/dice');

describe('dice', () => {
  // describe('hopefully roll works', () => {
    it('should exist', () => {
      isFunction(roll);
    });

    it('should return an number',  () => {
      roll("1d6")
      // .then( (diceTotal) => {
      //   isNumber(diceTotal, "Hooray! It's diceTotal!")
      // })
  })

});

describe('dice', () => {
  // describe('hopefully roll works', () => {
  it('should exist', () => {
    isFunction(toDiceNotation);
  });
});