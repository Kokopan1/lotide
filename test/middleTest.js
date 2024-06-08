
//Import Functions
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  // ===== TEST CASE 1: Testing Number Array =====
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  // ==== TEST CASE 2: Testing String Array ====
  it("returns ['you'] for ['hey', 'there', 'you', 'good', 'looking']", () => {
    assert.deepEqual(middle(['hey', 'there', 'you', 'good', 'looking']), ['you']);
  });
  
  // ===== TEST CASE 3: Testing Array modification =====
  it("should not modify the original array", () => {
    const testNumber = [1, 2, 6];
    const testNumberCopy = [...testNumber]; // Make a copy of testNumber, this is called spread
    
    // Call your function but ignore its return for this test.
    middle(testNumberCopy);
    assert.deepEqual(testNumberCopy, testNumber, "Original array was modified");
  });

});

