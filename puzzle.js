function containsValidBraces(testString) {   
  
    // let regex = /\(.*\)|[.*\]|\{.*\}/;
    
    // if (regex.test(testString)) {
    //     return "valid";
    // }
    // else {
    //     return "invalid"
    // }
    const stack = [];
    const openingBraces = "({[";
    const closingBraces = ")}]";
    
    for (const char of testString) {
        if (openingBraces.includes(char)) {
            stack.push(char);
        } else if (closingBraces.includes(char)) {
            const matchingOpeningBrace = openingBraces[closingBraces.indexOf(char)];
            if (stack.pop() !== matchingOpeningBrace) {
                return "invalid";
            }
        }
    }
    
    return stack.length === 0 ? "valid" : "invalid";
}




// if (testString.includes("(")) {
//     testString += ")"
// }
// else if (testString.includes("{")) {
//     testString += "}"
// }
// if (testString.includes("[")) {
//     testString += "]"
// }




function ChangeMaker(price, payment) {
    let priceCents = Math.round(price * 100);
    let paymentCents = payment.reduce((acc, curr) => acc + Math.round(curr * 100), 0);
    
    let changeCents = paymentCents - priceCents;
    
    const coinDenom = [100, 50, 25, 10, 5, 1];
    const returnArray = [];
    
    for (const denomination of coinDenom) {
        let numCoins = Math.floor(changeCents / denomination);
        returnArray.push(numCoins);
        changeCents -= numCoins * denomination;
    }
    
    return returnArray;
}

const price = 1.75;
const payment = [2.00];
const result = ChangeMaker(price, payment);
console.log(result);


//This didn't pass the test cases....