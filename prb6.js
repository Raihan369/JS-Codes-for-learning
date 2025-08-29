/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
// var experience = 3;
// var startingSalary = 15000;
// var experience = 40;
// var startingSalary = 30000;

//write your code here
for(let i=1 ; i<=experience ; i++)
{
    startingSalary += startingSalary*0.05 ;
}

var currentSalary = startingSalary.toFixed(2);

console.log(currentSalary);