import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as rtl from '@testing-library/react'
test('App renders without crashing', () => {
  rtl.render(<App />);
})


test('updates strike', () => {
  const wrapper = rtl.render(<App />)
  expect(wrapper.getByText(/strikes: 0/))
  rtl.fireEvent.click(wrapper.getByText(/^strike$/))
  expect(wrapper.getByText(/strikes: 1/))
})

test('updates ball', () => {
  const wrapper = rtl.render(<App />)
  expect(wrapper.getByText(/balls: 0/))
  rtl.fireEvent.click(wrapper.getByText(/^ball$/))
  expect(wrapper.getByText(/balls: 1/))
})

test('Foul updates strikes without striking out', () => {
  const wrapper = rtl.render(<App />)
  expect(wrapper.getByText(/strikes: 0/))
  rtl.fireEvent.click(wrapper.getByText(/^foul$/))
  rtl.fireEvent.click(wrapper.getByText(/^foul$/))
  rtl.fireEvent.click(wrapper.getByText(/^foul$/))
  expect(wrapper.getByText(/strikes: 2/))
})

// const assert = require('assert'); // same as import { assert } from 'assert';
// ​
// const sum = (a, b) => a + b // implicit return
// const subtract = (a, b) => a - b
// ​
// /**** This is NOT what you'll do to write tests ****/
// ​
// // STEP 1 - Write non-automated tests for our functions (units)
// // sanity check - break the test on purpose to make sure it's functioning correctly
// ​
// let result;
// let expected;
// ​
// result = sum(3, 7);
// expected = 10;
// ​
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
// ​
// result = subtract(3, 7);
// expected = -4;
// ​
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
// ​
// // STEP 2 - use node's built-in `assert` object
// // In testing our code, we are "asserting" that with the same 
// // conditions, our code returns the same results
// ​
// result = subtract(5, 3);
// expected = 2;
// ​
// assert.strictEqual(result, expected);
// ​
// ​
// result = sum(5, 3);
// expected = 8;
// ​
// assert.strictEqual(result, expected);
// ​
// ​
// // STEP 3 - Write a function that gives us more useful error messaging
// ​
// result = subtract(5, 3);
// expected = 2;
// ​
// expect(result).toBe(expected);
// ​
// result = sum(5, 3);
// expected = 8;
// ​
// expect(result).toBe(expected);
// ​
// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`);
//       }
//     },
// ​
//   }
// }
// ​
// ​
// // STEP 5 - Know which test is breaking!
// ​
// test('it returns the sum of the passed in numbers', () => {
//   result = sum(5, 3);
//   expected = 8;
// ​
//   expect(result).toBe(expected);
// })
// ​
// function test(title, callback) {
//   try {
//     callback();
//     console.log(`✅ ${title}`);
//   } catch (err) { // catch blocks "catch" thrown errors
//     console.error(`💔 ${title}`);
//     console.error(err);
//   }
// }
// ​
// /**** This is how you will actually write tests ****/
// ​
// ​
// test('it returns the sum of the passed in numbers', () => {
//   result = sum(5, 3);
//   expected = 8;
// ​
//   expect(result).toBe(expected);
// })