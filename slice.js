// slice 
const name = "John Doe";
console.log(name.slice( 0,4)); // John
console.log(name.slice(5));    // Doe

// split 

const sentence ="I am learning javascript through programming hero";

// console.log(sentence.split(' '));
console.log(sentence.split('a'));

///join

const words = ["I", "am", "learning", "javascript"];
console.log(words.join(' '));
console.log(words.join('-'));


// concat 

const firstName = "John";
const lastName = "Doe";
console.log(firstName.concat(" ", lastName));


//includes

console.log(sentence.includes("learning"));
console.log(sentence.includes("Python"));