var capitals = function (word) {
	const places = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word [i] <= 'Z') {
            places.push(i);
        }
    } 
    return places;
};





const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]