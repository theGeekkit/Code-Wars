function pipeFix(numbers){
  
    let firstNum = numbers[0];
    let lastNum = numbers[numbers.length -1];
  
    const numFixLength = lastNum - firstNum + 1;

    // Generate the output array in numerical order
    const numFix = Array.from({ length: numFixLength }, (_, index) => firstNum + index);
  
    return numFix;

}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
  });
});