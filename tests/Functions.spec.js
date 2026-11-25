const { test, expect } = require('@playwright/test');

function calculatePassedTests(passedTests , newPasses ){
    return passedTests + newPasses;

}
test('Practice JavaScript functions', async () => {

  const initialPassed = 6;
  const newlyPassed = 2;
  const finalPassed = calculatePassedTests(initialPassed,newlyPassed);

  console.log(finalPassed);
  expect(finalPassed).toBe(8);

});