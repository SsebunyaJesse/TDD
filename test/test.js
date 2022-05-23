const assert = require("chai").assert;
const multiply = require("../multiply");

// Test first TDD cycle 1
// describe('Testing the Multiply function',function(){
//     it('this is a multiply test',function (){
//         assert.equal((1*1),1,'not true...just lies')
//     })
// })
describe("Testing the Multiply function", function () {
  // first I wrote a failing test ..since i hadnt created a function multiply
  it("this is a multiply test for 1 * 1", function () {
    assert.equal(multiply(1, 1), 1);
  });
  it("this is a multiply test for 2 * 2", function () {
    assert.equal(multiply(2, 2), 4);
    // At first the test fails cos the return value is 1
  });
  // Are we green, does it  pass?
  // .... no, so lets update multiply() to go green
  it("this is a multiply test for 3 * 3", function () {
    // test passed 
    assert.equal(multiply(3, 3), 9);
  });
  it("this is a multiply test for 4 * 4", function () {
    // test passed 
    assert.equal(multiply(4, 4), 16);
  });
  it("this is a multiply test for 23 * 45", function () {
    // test passed 
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
