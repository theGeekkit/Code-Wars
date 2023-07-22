function mango(quantity, price){ 

    if (quantity % 3 !== 0)
      {return Math.floor(((quantity)-(quantity%3))*2/3*price) + (((quantity % 3)  ) * price) }
    else
  
    {return quantity*(2/3)*price}   
  
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        assert.strictEqual(mango(3, 3), 6)
        assert.strictEqual(mango(9, 5), 30)
    });
});

// if (quantity % 3 !== 0)
//     {return (Math.floor(quanity*2/3)* price) + (( quanity%3 < .5 ? 1 : 2) * price) }
// else
//     {return quantity*(2/3)*price}

