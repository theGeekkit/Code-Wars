function unusualFive() {
  
    let numFive = "heath";
    let newArray = numFive.split (' ')
    return numFive.length
    
  }

  describe("unusualFive", function(){
    it("should return 5", function(){
      assert.strictEqual(unusualFive(), 5);
    });
  });



//   Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

