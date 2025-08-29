var carPrice = 2000;
var applePrice =parseInt('20');//convert string to integer number
console.log(typeof carPrice);//number
console.log(typeof applePrice);//string
console.log(carPrice + applePrice) ;

var num1 = 0.11242424;
var num2 = 0.323;

var total = num1 + num2 ;
console.log(total.toFixed(2)); //tofixed for fixed point after decimal point

// start from 13.10 shorthand

num1 +=20;
var total2 = num1 + num2 ;
console.log(total2.toFixed(2));

console.log(40-'20');

var a = '40' + 20; //concatenation by + so output 4020 otherwise use -*/ no problem

const b = isNaN('11');//nan= not a number
console.log(b);
