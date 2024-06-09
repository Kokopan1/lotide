# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ashleyjn/lotide`

**Require it:**

`const _ = require('@ashleyjn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: gives you the index[0] element of an array
- `tail(...)`: gives you all the elements of an array besides index[0]
- `middle(...)`: gives you the middle element of an array, if the array is even it gives you the two middle elements of an array
- `assertArraysEqual(...)`: a manual test to see if the expected array is equal to the actual array
- `assertEqual(...)`: a manual test to see if the expected value is equal to the actual
- `assertObjectsEqual(...)`: a manual test to see if the expected object is equal to the actual object
- `countLetters(...)`: counts how many times a letter appears in a string
- `eqArrays(...)`: checks if arrays are equal
- `eqObjects(...)`: checks if objects are equal
- `findKey(...)`: finds if the key is in an object
- `findKeyByValue(...)`: finds the key based on the value searched
- `flatten(...)`: flattens an array so it no longer contains any nested arrays
- `letterPositions(...)`: finds all the letter positions of the value and returns an array of the positions
- `countOnly(...)`: the function reports back how many instances of each string were found in the allItems array of string
- `takeUntil(...)`: returns a new array of all the data that matches the callback functions requirement
- `without(...)`: removes specified items from an array
- `map(...)` : iterated through an array while applying the function
