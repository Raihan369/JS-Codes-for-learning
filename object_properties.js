const person =
{
    name : "raihan",
    age : 25,
    profession : "developer",
    salary : 50000,
    location : "bangladesh",
    'fav place' : ["saintmartin","bandarban","sajek","coxs bazar"]

}

console.log(person);
console.log(person['age']);
console.log(person['fav place']);


// can change value . 

person.location = "dhaka";
person['fav place'] = ["rangamati", "sylhet"];

console.log(person);