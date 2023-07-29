function makeNegative(num) {

    if (num > 0) {
    return -num;
    }
    else if (num <= 0) {
    return num
    }
  }

  const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});
