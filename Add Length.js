function addLength(str) {

    let newbString = str.split(" ");
   
    return newbString.map((word) => word + " " + word.split("").length); 
}
    
   

    // console.log(addLength("Apple Ban"));




const { assert } = require('chai');
describe("Sample Tests", () => {
  it(`Testing for "apple ban"`, () => {
    const actual = addLength('apple ban');
    assert.isDefined(actual, "You need to return an array. Did you log to the console instead?");
    assert.deepEqual(actual, ["apple 5", "ban 3"]);
  });
  it(`Testing for "you will win"`, () => assert.deepEqual(addLength('you will win'),["you 3", "will 4", "win 3"]));
});
