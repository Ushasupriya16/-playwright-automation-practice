const {test,expect} = require("@playwright/test");

test("Loops in Javascript",async()=> {
const transactions = [100,250,500];
let total = 0;

for(const amount of transactions)
{
  total = total+amount;
}
console.log(`total amount: ${total}`);
expect (total).toBe(850);

});