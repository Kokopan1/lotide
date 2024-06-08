// Import Functions
/*
const assertEqual = require("../assertEqual");
const tail = require("../tail");
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  //Check for One Element
  it("returns 0 for [\"One element\"]", () => {
    assert.deepEqual(tail(["One element"]).length, 0);
  });
  //Check for Empty Array
  it("returns 0 for []", () => {
    assert.deepEqual(tail([]).length, 0);
  });
  //Check for Muilti Element Array
  it("returns 2 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });

  //Check Array is not Mutated
  it("returns Lighthouse for tail([\"Yo Yo\", \"Lighthouse\", \"Labs\"])[0]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
  });

  it("returns Labs for tail([\"Yo Yo\", \"Lighthouse\", \"Labs\"])[1]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[1], "Labs");
  });
});




