const {test,expect} = require("@playwright/test");

test("Practice arrays and objects",async()=>
{

const browsers = ["chromium", "firefox", "webkit"];
const testUser = {
username: "tomsmith",
role: "admin",
 isActive: true
};

console.log(browsers[1]);
console.log(testUser.username);
browsers.push("mobile");
expect(browsers.length).toBe(4);



}



);