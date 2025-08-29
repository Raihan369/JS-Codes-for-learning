// const price =50;
// const comp_price =price;

// console.log(comp_price);


/// for copy array if you change anything both will be change cause its primitive data
// const price = [20,30,40];
// const comp_price =price;

// comp_price[0]=80;
// console.log(comp_price);
// console.log(price);


//another method to copy in array

const prices = [12,20,25,65];

// const comp_price = Array.from(prices);

// const comp_price = [].concat(prices);

const comp_price = [...prices];

//   comp_price[1] = 100;
comp_price.push(10);

console.log(prices);
console.log(comp_price);


//shallow copy vs deep copy