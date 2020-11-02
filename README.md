# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ericasu33/lotide`

**Require it:**

`const _ = require('@ericasu33/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * assertArraysEqual : asserting that two arrays are equal.

  * assertEqual : compare the two values it takes in and print out a message telling us if they match or not.

  * assertObjectsEqual : sserting that two objects are equal.

  * countLetters : ake in a sentence (as a string) and then return a count of each of the letters in that sentence.

  * countOnly : given an array and an object. It will return an object containing counts of everything that the input object listed.

  * eqArrays : compare two arrays for a perfect match.
  
  * eqObjects : compare two objects for a perfect match.

  * findKey : takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

  * findKeyByValue : takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

  * flatten : take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

  * head : retrieve the first element from the array.

  * letterPositions : return all the indices (zero-based positions) in the string where each character is found.

  * map : return a new array based on the results of the callback function.

  * middle : take in an array and return the middle-most element(s) of the given array.

  * tail : retrieve every element except the head (first element) of the array.

  * takeUntil : will keep collecting items from a provided array until the callback provided returns a truthy value.

  * without : return a subset of a given array, removing unwanted elements.