/*$(document).ready(function() 
{
	document.getElementById("startbutton").addEventListener("click", myFunction2);
/*  
});
*/
function myFunction() {
  document.getElementById("hierHin").innerHTML="hallo";
  document.getElementById("fname").innerHTML="Test";
 /* document.getElementById("fname").focus();*/
}


function myFunction2() {
window.open('analg_form.html','_blank', 'location=yes,top=200,left=200,height=470,width=520,scrollbars=yes,status=yes');	

}

function alterString() {
	 // datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
	Date.dateDiff = function(datepart, fromdate, todate) {	
	  datepart = datepart.toLowerCase();	
	  var diff = todate - fromdate;	
	  var divideBy = { y:86400000*365,
		  			   m:86400000*30,
		  			   w:604800000, 
	                   d:86400000, 
	                   h:3600000, 
	                   n:60000, 
	                   s:1000 };	
	  
	  return Math.floor(diff/divideBy[datepart]);
	}
	var today= new Date();		
	var xyz= new Date(document.getElementById("birthday").value);	
	//console.log(Date.dateDiff("d",xyz,today))
	return Date.dateDiff('y',xyz,today);
}


function ausgabeBox() {
	box= "Ambulante Schmerztherapieanordnung für " +
	document.getElementById("fname").value + " " +
	document.getElementById("lname").value + "<br>" +
	//document.getElementById("birthday").value;
	"Alter: " + alterString();
  document.getElementById("hierHin").innerHTML=box;	
  
}