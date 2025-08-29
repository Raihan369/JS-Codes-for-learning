const employes = 
[
    {name: "john" ,age:25 , designation : "developer" ,salary : 80000},
    {name: "jane" ,age:30 , designation : "designer" ,salary : 60000},
    {name: "doe" ,age:28 , designation : "manager" ,salary : 70000}
]

// console.log(employes[2].salary);

employes[2].name = 'pitbull';
////another way///////////////

for (const person of employes)
{
    // const person = emp;
    const personInfo = person.name + " : "+person.salary;
    console.log(personInfo);
}

