const num = [12,32,64,58,26];

num.sort();

// console.log(num);

const num2 = [1,32,23,100,29,35];
// num2.sort();
// console.log(num2); ///basic js string er moto first letter diye compare kore

const sortedAges = num2.sort(function (a,b) {return a - b}); //ascending

// console.log(sortedAges);

//descending

const sortedAges2 = num2.sort(function (a,b) {return b - a});
console.log(sortedAges2);