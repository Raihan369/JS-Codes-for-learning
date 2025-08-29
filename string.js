// string declare process 
// const country ="bangladesh";
// const division ='dhaka';
// const city = `dhaka city`; //`` called backtick
// const  thana =new String('dhanmondi');

// console.log(city[3]);
// console.log(city.length);


//string is immutable.can not be changed through indexing but array is mutable...

const school = `government science coLLEGE`

// console.log(school.toUpperCase());
// console.log(school.toLowerCase());

const emailGiven = "hudai@gmail.com  ";
const emailGiven2 = "  HUdai@Gmail.com";
//trim eliminate all whitepace before and after words..
if (emailGiven.toLocaleLowerCase().trim() === emailGiven2.toLocaleLowerCase().trim())
{
    console.log("login done");
}
else
{
    console.log("login failed");
}