function center (strng, width, fill = ' ') {
  return '';

}



const strictEqual = require("chai").assert.strictEqual;

function doTest (args, expected) {
  const log = `for center("${args[0]}", ${args[1]}` + ((args.length === 3) ? `, '${args[2]}')\n` : ')\n');
  const actual = center(...args);
  strictEqual(actual, expected, log);
}

describe("Tests suite", function() {
  it("sample tests", function() {
    doTest(["a", 3, ' '], " a ");
    doTest(["a", 3], " a ");
    doTest(["", 3, '_'], "___");
    doTest(["abc", 10, '_'], "____abc___");
    doTest(["____abc___", 10, '_'], "____abc___");
    doTest(["abcdefg", 2, ' '], "abcdefg");
  });
});



// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

// center(strng, width, fill=' ')
// If the left and right padding cannot be of equal length make the padding on the left side one character longer.

// If strng is longer than width return strng unchanged.

// Examples
// center('a', 3)  # returns " a "
// center('abc', 10, '_')  # returns "____abc___"
// center('abcdefg', 2)  # returns "abcdefg"
