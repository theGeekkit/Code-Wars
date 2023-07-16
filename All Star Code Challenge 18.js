function strCount(str, letter) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        lCounter++;
      }
    }
  
    return lCounter;
  }

  const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});