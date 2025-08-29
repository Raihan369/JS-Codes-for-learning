// for(initialization;condition ; increment/decrement)
// {

// }

// for (let num=1 ; num<10 ; num++)
// {
//     console.log("serial : "+num);
// }

// problem .. 

// for(let num =20 ; num>=11; num-- )
// {
//     console.log("Serial is : " + num);
// }


///problem even

// for(let i = 0 ;i <=20 ;i++)
// {
//     if(i%2 === 0 )
//     {
//         console.log("Even Number: " + i);
//     }
// }


// for(let i=0 ; i<=100 ; i++)
// {
//     if(i%3 === 0 && i%5 === 0)
//     {
//         console.log("FizzBuzz");
//     }
// }

// sum of 50 numbers  which is divided by 3

let total = 0;

for(let i=0 ; i<=100 ; i++)
{
    if(i%3 === 0 )
    {
        total += i ;
    }
}

console.log("Total is : "+ total);
