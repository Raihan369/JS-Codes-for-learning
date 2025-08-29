const sentence = "I am learning web dev";

// let reverse = '';
// for(const letter of sentence)
// {
//     reverse = letter + reverse;
// }
// console.log(reverse);


//another way solve

// let rev ='';

// for(let i=0; i<sentence.length; i++)
// {
//     const letter = sentence[i];
//     rev = letter + rev;
// }

// console.log(rev);

console.log(sentence.split('').reverse().join('')); // using built-in methods
console.log(sentence.split('').reverse() ); //reverse() func work in only array 