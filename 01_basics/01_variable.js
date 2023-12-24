const accountId=14453;
let accountEmail="abc@123.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

// accountId=2 //Not allowed because you are changing a const item

accountEmail="hc@hc.mail";
accountPassword="2173";
accountCity="paris";

/*
prefer not to use var because of the in issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
