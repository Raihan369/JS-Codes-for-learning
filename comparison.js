// console.log(10 == '10'); // == value compare kore
// console.log(10 === '10'); //=== value+type compare kore

// if else condition 

// const salary = 50000;
// const offDay = 2;
// isBonus = true;

// if ((salary>=50000 && offDay >=2) || isBonus == true ) // || or hole jekono ekta true holei condition true hobe
// {
//     console.log("I should join");
// }
// else 
// {
//     console.log("Should search another opportunity");
// }


// multi level condition 

// let purchase = 3000;

// if(purchase>=5000)
// {
//     // 10% discount 
//     const discount = purchase * 10/100 ;
//     const price = purchase - discount;
//     console.log ("You have to pay: ",price);
// }
// else if (purchase>=2500)
// {
//     // 5% discount 
//     const discount = purchase * 5/100 ;
//     const price = purchase - discount;
//     console.log ("You have to pay: ",price);
// }

// else{
//     console.log(purchase);
// }

// ////////////////////ternery = 3 parts
// condition ? true : false

// const age =20;

// const isAdult = (age >= 18) ? "Adult" : "Not Adult";
// console.log(isAdult);

// isLeader = true;
// price = 2000;
// price = isLeader == true ? price > 1000? price/2 : 0 : price + 1000 ;
// console.log(price); // 1000

//! not operator
const isLeader = false ;
const price = 20000;
if(!isLeader)
{
    console.log(price);
}
else
{
    console.log("You are a leader, so you get discount");
}