function enough(cap, on, wait) {
  
    
    let seatSum = cap - on;
    let boardSoon = wait - seatSum;
    return Math.max(boardSoon, 0);
      
      
    // let seatSum = (cap - on)
    
    // let boardSoon = wait - seatSum;
     
    //  if (boardSoon > 0)
     
    //  {return boardSoon}
     
    //  else {return 0;}
    
   }


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
