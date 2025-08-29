const computer = 
{
    brand : "asus",
    price : 50000,
    ssd : "1tb",
    processor : "amd",
    graphics : "nvidia",
    ram : "16gb"
}
//for of = array
//for in = object
for (const prop in computer) {
    console.log(prop);
}

for(const key of Object.keys(computer))
{
    console.log(key);
}