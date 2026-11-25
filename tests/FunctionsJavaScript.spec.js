const {test,expect}= require("@playwright/test");

function calculateTotal(amount,fee){
    return amount+fee;
}

test("Functions code for transaction fee", async()=>{

const amount=250;
const fee = 10;
console.log(calculateTotal(amount,fee));
expect(calculateTotal(amount,fee)).toBe(260);



}





);