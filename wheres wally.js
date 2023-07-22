function wheresWally(string){
  
    if (string) {
        return string.split(' ') .forEach(string.split('').indexOf("Wally"))
    }
    
    return -1 ;

}


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(wheresWally(""),-1)
Test.assertEquals(wheresWally("DWally"),-1)
Test.assertEquals(wheresWally(".Wally"),-1)

Test.assertEquals(wheresWally("Wally"),0)
Test.assertEquals(wheresWally("Where's Wally"),8)
Test.assertEquals(wheresWally("Hi Wally."),3)
  });
});

    