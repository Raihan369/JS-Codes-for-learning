const accountId = 144553
let accountEmail = "raihan@google.com"
var accountPassword = "12345"
accountCity = "mirpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rc@hc.com"
accountPassword = "21212121"
accountCity = "noakhali"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form]) */