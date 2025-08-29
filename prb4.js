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