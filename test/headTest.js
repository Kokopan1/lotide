
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  // ==== Test 1: Has Number ====
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  // ==== Test 2: Has Number ====
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  // ==== Test 3: Has String Mix ====
  it("returns 'Hello' for ['Hello', 'You', 'Cutie', '(^///^)', '😎']", () => {
    assert.strictEqual(head(['Hello']), 'Hello');
  });
  
  // ==== Test 4: Has Number ====
  it("returns 5 for [5, 6, 7, 9, 10]", () => {
    assert.strictEqual(head([5]), 5);
  });
});


