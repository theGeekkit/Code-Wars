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
