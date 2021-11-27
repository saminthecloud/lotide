# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saminthecloud/lotide`

**Require it:**

`const _ = require('@saminthecloud/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two arrays are equal
* `assertEqual`: asserts if two values are equal
* `assertObjectsEqual`: asserts if two objects are equal
* `countOnly`: counts the number of instances of a specified list in an arrays
* `eqArrays`: compares two arrays to check if they are equal
* `eqObjects`: compares two objects to check if they are equal
* `findKey`: finds the first key in an object that satisfies the the callback function 
* `findKeyByValue`: finds the first key in an object that corresponds to the value of a key value pair
* `head`: returns the first element in an array
* `map`: maps each item of an input array to an output array based on a callback function
* `middle`: returns the middle element of the array
* `takeUntil`: returns the elements of an array until the callback function criteria is satisfied
* `without`: removes items from an input array from an array of items to remove