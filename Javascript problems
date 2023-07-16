function noBoringZeros(n) {
      let newString = n.toString();

      if (newString === "0")
        {return 0}; 


       for (let i = newString.length - 1; i >= 0; i--) {
        if (newString[i] === "0") {
          newString = newString.slice(0, i); 
        } else {
          break;
        }
      }


      return parseInt(newString);
    }


    const Test = require('@codewars/test-compat');

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",function() {
  it("noBoringZeros",function() {
    assert.strictEqual(noBoringZeros(1450), 145)
    assert.strictEqual(noBoringZeros(960000), 96)
    assert.strictEqual(noBoringZeros(1050), 105)
    assert.strictEqual(noBoringZeros(-1050), -105)
    assert.strictEqual(noBoringZeros(-105), -105)
    assert.strictEqual(noBoringZeros(0), 0)
  })
})
