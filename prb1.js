// Problem-01
function totalFine( fare ) {
          
    if(typeof fare != "number" || fare<=0 )
    {
        return "Invalid";
    }
    else 
    {
        return fare + (fare * 0.2) + 30;
    }
}

// console.log(totalFine(200));      
// console.log(totalFine(0));     
// console.log(totalFine(50));       
// console.log(totalFine(552));    
// console.log(totalFine(-35));     
// console.log(totalFine("65"));     
// console.log(totalFine("Gorib tai ticket katinai"));  
