//using unshift
const num =[12,15,13,99,27];

const reversed =[];

// for(let i=0 ;i<num.length;i++)
// {
//     console.log(num[i]);
//     reversed.unshift(num[i]); ///element ashle takee prothome add kore...
// }

// console.log(reversed);

//using push

// for(let i=num.length-1;i>=0;i--)
// {
//     reversed.push(num[i]); //element ashle last e add kore...
// }

// console.log(reversed);

//using for

// for(const nums of num )
// {
//     reversed.unshift(nums);
// }
// console.log(reversed);

//using built in 

// console.log(num.reverse());


// for string 
const strong = "I am strong";
console.log(strong.split('').reverse().join("")); //split to array, reverse and join to string