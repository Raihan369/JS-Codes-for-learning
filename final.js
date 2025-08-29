/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var aset = area/2 ;

console.log(aset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money>=25000)
{
    console.log("Laptop");
}
else if (money>=10000)
{
    console.log("Cycle");
}
else 
{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for(let day = 1;day<=lastDay; day++)
{
    if(day%3===0)
    {
        console.log(`${day} - medicine`);
    }
    else
    {
        console.log(`${day} - rest`);
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
// var fileName = "result.pdf";  
// var fileName = "data.docx";
// var fileName = "#exp.mp4";  
// var fileName = "docx.txt";  
// var fileName = "docx.xpdf";  
// var fileName = "slipdf.txt"; 
//write your code here

if(fileName.includes("#")||fileName.endsWith(".pdf")||fileName.endsWith(".docx"))
{
    console.log("Store");

}
else
{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
// var student = { name: "monu", roll: 99, department: "cse" };
// var student = { name: "mewo" , roll: 96 ,department: "cse"  };
//write your code here

var email= student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
// var experience = 3;
// var startingSalary = 15000;
// var experience = 40;
// var startingSalary = 30000;

//write your code here
for(let i=1 ; i<=experience ; i++)
{
    startingSalary += startingSalary*0.05 ;
}

var currentSalary = startingSalary.toFixed(2);

console.log(currentSalary);